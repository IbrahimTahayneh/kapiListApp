import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { Card, Header } from "../components";

export default function ListScreen({ navigation }) {
  return (
    <>
      <Header
        style={[styles.headerContainer]}
        center={<Text>hello</Text>}
        right={<Text>Hhadhas</Text>}
      />
      <View style={[styles.contentContainerStyle]}>
        <Card
          title="hello"
          descriptiveText="yelsgsdgsdgsdkgsdkgnsdkgnsdkgnsdkgnsdkgnskdgnsdkgnskdgnskdgnskdgnskdgnskdgnskdgnskd"
        />
        <Card
          title="hello"
          descriptiveText="yelsgsdgsdgsdkgsdkgnsdkgnsdkgnsddsdsdssdsdsdsdsdsddssddssdkgnsdkgnskdgnsdkgnskdgnskdgnskdgnskdgnskdgnskdgnskd"
        />
        <Card
          title="hello"
          descriptiveText="yelsgsdgsdgsdkgsdkgnsdkgnsdkgnsdkgnsdkgnskdgnsdkgnskdgnskdgnskdgnskdgnskdgnskdgnskd"
        />
        <Button onPress={() => navigation.navigate("Form")} title="hello" />
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
