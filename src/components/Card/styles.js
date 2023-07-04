import { StyleSheet } from "react-native";

export default StyleSheet.create({
  
  categoryShadow: {
    shadowColor: "#5a5a5a",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4.65,
  },

  container: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    margin: 10,
    padding: 10,
  },

  categoryText: {
    color: "#0A0A0A",
    marginBottom: 5,
    textAlign: "center",
    paddingHorizontal: 10,
  },

  descriptiveText: {
    color: "#9E9E9E",
    marginBottom: 21,
    textAlign: "center",
    paddingLeft: 12,
    paddingRight: 12,
  },
});
