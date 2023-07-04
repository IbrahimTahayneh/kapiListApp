import React from "react";
//Navigation
import { NavigationContainer as RNNavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screen
import ListScreen from "./ListScreen";
import FormScreen from "./FormScreen";

const Stack = createNativeStackNavigator();

export default function NavigationContainer() {
  return (
    <RNNavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
      </Stack.Navigator>
    </RNNavigationContainer>
  );
}
