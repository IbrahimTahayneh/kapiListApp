import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const Card = ({
  title = "",
  bodyText = "",
  onPress = () => {},
  style = {},
}) => {
  return (
    <TouchableOpacity
      testID={"card"}
      {...{ onPress }}
      style={[styles.container, style]}
    >
      <Text style={[styles.categoryText]}>{title}</Text>
      <Text style={styles.descriptiveText}>{bodyText}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Card);
