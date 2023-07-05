import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Card, Header } from "../components";
import { useFetchItem } from "../hooks";

export default function ListScreen({ navigation }) {
  const itemsData = useFetchItem();

  return (
    <>
      <Header
        style={[styles.headerContainer]}
        center={<Text>hello</Text>}
        right={<Text>Hhadhas</Text>}
      />
      <View style={[styles.contentContainerStyle]}>
        <FlatList
          keyboardShouldPersistTaps={"always"}
          keyExtractor={(item, i) => item?.id?.toString()}
          renderItem={({ item: itemsData }) => {
            return (
              <Card
                title={itemsData?.title}
                descriptiveText={itemsData.body}
                onPress={() =>
                  navigation.navigate("Form", {
                    title: itemsData.title,
                    body: itemsData.body,
                  })
                }
              />
            );
          }}
          data={itemsData}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    // paddingHorizontal: 30,
    // paddingBottom: 15,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
});
