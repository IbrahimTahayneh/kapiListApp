import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const Card = ({
  title = "",
  descriptiveText = "",
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
      <Text style={styles.descriptiveText}>{descriptiveText}</Text>
    </TouchableOpacity>
  );
};

export default Card;
