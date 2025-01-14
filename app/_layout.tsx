import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function _layout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
