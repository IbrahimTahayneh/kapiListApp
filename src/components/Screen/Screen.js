import React from "react";
import {
  View,
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Header, Loading, StatusBar } from "../../components";

const Screen = ({
  children,
  style = "",
  barStyleBackgroundColor = "white",
  scrollable = true,
  isLoading = false,
  withHeader = true,
  headerTitle = "",
  headerLeftComponent,
  headerRightComponent,
  withKeyboardAvoidingView = false,
  keyboardShouldPersistTaps = "handled",
  iphoneXBottomBgColor = "",
}) => {
  const _renderContents = () => (
    <View style={[styles.container, style]}>
      {withHeader ? (
        <Header
          title={headerTitle}
          leftComponent={headerLeftComponent}
          rightComponent={headerRightComponent}
        />
      ) : null}
      {children}
    </View>
  );

  const getContainers = () => {
    let containers = _renderContents();

    if (scrollable) {
      containers = (
        <ScrollView
          style={[styles.scrollView]}
          keyboardShouldPersistTaps={"handled"}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          bounces={false}
          contentContainerStyle={{ flexGrow: 1, flex: 1 }}
        >
          {containers}
        </ScrollView>
      );
    }

    if (withKeyboardAvoidingView) {
      containers = (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          {containers}
        </KeyboardAvoidingView>
      );
    }

    return containers;
  };

  return (
    <StatusBar
      backgroundColor={barStyleBackgroundColor || style?.backgroundColor}
      iphoneXBottomBgColor={iphoneXBottomBgColor}
    >
      {getContainers()}
      {isLoading ? <Loading /> : null}
    </StatusBar>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 10,
  },
  scrollView: {
    flex: 1,
  },
});

export default React.memo(Screen);
