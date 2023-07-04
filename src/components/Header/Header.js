import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
//STYLES
import styles from "./styles";

const Header = ({
  style = [{ height: 80 }],
  containersStyles = { leftStyle: {}, centerStyle: {}, rightStyle: {} },
  flex = { left: 0, center: 1, right: 0 },
  left = <View />,
  center = <View />,
  right = <View />,
}) => (
  <View style={[styles.container, ...(Array.isArray(style) ? style : [style])]}>
    <View
      style={[
        { flex: flex.left, justifyContent: "center" },
        ...(Array.isArray(containersStyles.leftStyle)
          ? containersStyles.leftStyle
          : [containersStyles.leftStyle]),
      ]}
    >
      {left}
    </View>
    <View
      style={[
        { flex: flex.center, justifyContent: "center" },
        ...(Array.isArray(containersStyles.centerStyle)
          ? containersStyles.centerStyle
          : [containersStyles.centerStyle]),
      ]}
    >
      {center}
    </View>
    <View
      style={[
        { flex: flex.right, justifyContent: "center" },
        ...(Array.isArray(containersStyles.rightStyle)
          ? containersStyles.rightStyle
          : [containersStyles.rightStyle]),
      ]}
    >
      {right}
    </View>
  </View>
);

export default React.memo(Header);
