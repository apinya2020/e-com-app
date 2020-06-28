import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import { persistor, store } from "./redux";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = null;

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaProvider>
            <ActionSheetProvider>
              <PaperProvider>
                <Navigation colorScheme={colorScheme} />
                <StatusBar />
              </PaperProvider>
            </ActionSheetProvider>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    );
  }
}
