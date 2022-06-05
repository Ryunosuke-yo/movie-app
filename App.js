import React from "react"
import { NativeBaseProvider } from "native-base";
import AppStack from "./src/components/stack/AppStack";

export default function App() {
  return (
  <NativeBaseProvider>
    <AppStack />
  </NativeBaseProvider>
  );
}
