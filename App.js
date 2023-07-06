import { useState } from "react";
import AppLoading from "expo-app-loading";
import { AppContainer } from "./src";
import { DataProvider } from "./src/context/DataContext";
import { useFonts } from "./src/hooks";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  // loading the fonts
  const LoadFonts = async () => {
    await useFonts();
  };

  if (!isLoading) {
    return (
      // if the font is not loaded return AppLoading
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setIsLoading(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <DataProvider>
      <AppContainer />
    </DataProvider>
  );
}
