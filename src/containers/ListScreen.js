import { FlatList } from "react-native";
import React, { useContext } from "react";
// import { Screen } from "../components/Screen";
import { Card, Screen } from "../components";
import { DataContext } from "../context/DataContext";
import { Logo } from "../assets/images";

export default function ListScreen({ navigation }) {
  const { data } = useContext(DataContext);

  const renderCard = ({ item }) => (
    <Card
      title={item?.title}
      bodyText={item.body}
      onPress={() => navigation.navigate("Form", { id: item?.id })}
    />
  );

  return (
    <Screen headerLeftComponent={<Logo />} headerTitle="KABI" isLoading={!data}>
      <FlatList
        keyboardShouldPersistTaps={"handled"}
        keyExtractor={(item, i) => item?.id}
        renderItem={renderCard}
        data={data}
      />
    </Screen>
  );
}
