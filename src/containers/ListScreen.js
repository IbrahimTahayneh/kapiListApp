import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function ListScreen({ navigation }) {
  return (
    <View>
      <Text>ListScreen</Text>
      <Button onPress={() => navigation.navigate("Form")} title="hello" />
    </View>
  );
}

const styles = StyleSheet.create({});
