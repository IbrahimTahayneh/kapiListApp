import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const Title = styled.Text`
  font-size: 34px;
  color: aqua;
`;

export default function App() {
  return (
    <View style={styles.container}>
      <Title>Hello There!!!</Title>
      <Text>
        Open up App.js to start working on your app Ibrahim
        cccccccccccccccccccccc
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
