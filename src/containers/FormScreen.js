import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/core";
import { Header } from "../components";

export default function FormScreen() {
  const route = useRoute();
  const [title, setTitle] = useState(route.params?.title || "");
  const [body, setBody] = useState(route.params?.body || "");

  return (
    <View>
      <Header />
      <TextInput
        style={[styles.textInput]}
        value={title}
        onChangeText={setTitle}
        numberOfLines={4}
        multiline={true}
      />
      <TextInput
        style={[styles.textInput]}
        value={body}
        onChangeText={setBody}
        numberOfLines={4}
        multiline={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: Platform.OS === "android" ? 4 : 2,
    fontWeight: "300",
    fontSize: 15,
    color: "#000",
    borderColor: "#000",
    borderWidth: 1,
  },
});
