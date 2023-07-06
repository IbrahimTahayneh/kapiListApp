import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { useRoute, useNavigation } from "@react-navigation/core";
import Icon from "react-native-vector-icons/AntDesign";

import { Screen } from "../components";

import { DataContext } from "../context/DataContext";

export default function FormScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { getItemById, updateItem } = useContext(DataContext);

  const { id } = route.params;
  const itemData = getItemById(id);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isEditable, setIsEditable] = useState(false);

  const handleEditToggle = () => {
    setIsEditable(true);
  };

  const initializeData = () => {
    if (itemData) {
      setTitle(itemData.title);
      setBody(itemData.body);
    }
  };

  useEffect(() => {
    initializeData();
  }, []);

  const handleSubmit = () => {
    const updatedItem = {
      title: title,
      body: body,
    };
    updateItem(id, updatedItem);
    navigation.navigate("List");
  };

  const resetChanges = () => {
    initializeData();
    setIsEditable(false);
  };

  const handleTextInputPress = () => {
    if (!isEditable) {
      Alert.alert(
        "Alert",
        "Please, Enter to edit icon to edit \nthe Title or Body"
      );
    }
  };

  return (
    <Screen
      isLoading={!itemData}
      headerRightComponent={
        isEditable ? (
          <Icon name={"close"} size={24} onPress={resetChanges} />
        ) : (
          <Icon name={"edit"} size={24} onPress={handleEditToggle} />
        )
      }
      headerLeftComponent={
        <Icon name="arrowleft" onPress={navigation.goBack} size={24} />
      }
      withKeyboardAvoidingView
    >
      <TouchableOpacity activeOpacity={1} onPress={handleTextInputPress}>
        <Text style={[styles.textLabel]}>Title</Text>
        <TextInput
          style={[styles.textInput, !isEditable && styles.disabledInput]}
          value={title}
          onChangeText={setTitle}
          numberOfLines={4}
          multiline={true}
          editable={isEditable}
          returnKeyType="done"
        />

        <Text style={[styles.textLabel]}>Body</Text>

        <TextInput
          style={[styles.textInput, !isEditable && styles.disabledInput]}
          value={body}
          onChangeText={setBody}
          numberOfLines={4}
          multiline={true}
          editable={isEditable}
          returnKeyType="done"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.submitBtn, !isEditable && styles.disabledBtn]}
        onPress={handleSubmit}
        activeOpacity={0.7}
        disabled={!isEditable}
      >
        <Text style={[styles.text]}>Save</Text>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  textLabel: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "PoppinsSemiBold",
    fontSize: 16,
    fontWeight: "500",
  },
  textInput: {
    padding: Platform.OS === "android" ? 4 : 2,
    fontWeight: "400",
    fontSize: 16,
    color: "#0A0A0A",
    borderColor: "#3EBFCF",
    borderWidth: 1,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    fontFamily: "PoppinsRegular",
  },
  submitBtn: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 64,
    width: "100%",
    paddingHorizontal: 30,
    marginVertical: 10,
    borderRadius: 35,
    backgroundColor: "#0A0A0A",
    marginTop: "auto",
  },

  text: {
    fontWeight: "600",
    fontSize: 17,
    fontFamily: "PoppinsBlod",
    color: "#FFF",
  },
  disabledBtn: {
    backgroundColor: "#D5E0E8",
  },
  disabledInput: {
    borderColor: "#0A0A0A",
    backgroundColor: "#EDEDED",
  },
});
