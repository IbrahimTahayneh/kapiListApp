import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const ButtonImage = ({
  onPress = () => {},
  style = [],
  imageStyle = [],
  source = null,
  resizeMode = "contain",
}) => (
  <TouchableOpacity
    testID={testID}
    hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
    onPress={() => onPress()}
    style={[styles.button, ...(Array.isArray(style) ? style : [style])]}
  >
    <Image
      {...{ source }}
      resizeMode={resizeMode}
      style={[...(Array.isArray(imageStyle) ? imageStyle : [imageStyle])]}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default React.memo(ButtonImage);
