import React from "react";
import { View, Platform, KeyboardAvoidingView, StyleSheet } from "react-native";
import { Header, Loading, StatusBar } from "../";

const Screen = ({
  children,
  style = "",
  barStyleBackgroundColor = "white",
  isLoading = false,
  withHeader = true,
  headerTitle = "",
  headerLeftComponent,
  headerRightComponent,
  withKeyboardAvoidingView = false,
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
});

export default React.memo(Screen);
