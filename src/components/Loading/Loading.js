import React from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import Modal from "react-native-modal";

const LoadingScreen = () => (
  <Modal
    backdropColor="transparent"
    animationIn={"fadeIn"}
    animationOut={"fadeOut"}
    isVisible
    style={styles.modal}
  >
    <ActivityIndicator
      size="large"
      color={"#ffffff"}
      testID={"loading-animation"}
    />
  </Modal>
);

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default React.memo(LoadingScreen);
