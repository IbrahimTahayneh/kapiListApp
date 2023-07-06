import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    minHeight: 50,
    width: " 100%",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingTop: 4,
    minHeight: 50,
    backgroundColor: "#FFFFFF",
  },
  leftContainer: {
    minWidth: 44,
    marginRight: 8,
    justifyContent: "center",
    // paddingLeft:5 ,
  },
  middleContainer: {
    flex: 1,
  },
  title: {
    color: "#0A0A0A",
    textAlign: "center",
    fontFamily: "PoppinsSemiBold",
    fontSize: 20,
    fontWeight: "600",
  },
  rightContainer: {
    minWidth: 44,
    marginLeft: 8,
    justifyContent: "center",
    // paddingRight: 10,
  },
});
