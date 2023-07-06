import * as Font from "expo-font";

export const useFonts = async () => {
  await Font.loadAsync({
    PoppinsRegular: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
    PoppinsBlod: require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
  });
};
