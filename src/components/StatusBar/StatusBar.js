import React, { memo } from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar as RNStatusBar,
} from "react-native";

export const StatusBar = ({
  children,
  barStyle = "dark-content" | "light-content",
  backgroundColor = "",
  iphoneXBottomBgColor = "",
}) => (
  <>
    <RNStatusBar
      backgroundColor={backgroundColor || "#FFFFFF"}
      barStyle={barStyle || "dark-content"}
    />
    <SafeAreaView
      style={[styles.topSafeArea]}
      backgroundColor={backgroundColor || "#FFFFFF"}
    />
    {children}
    <SafeAreaView
      style={[styles.bottomSafeArea]}
      backgroundColor={iphoneXBottomBgColor || backgroundColor || "#EDEDED"}
    />
  </>
);

const styles = StyleSheet.create({
  topSafeArea: {
    backgroundColor: "transparent",
  },
  bottomSafeArea: { backgroundColor: "transparent" },
});

export default memo(StatusBar);
