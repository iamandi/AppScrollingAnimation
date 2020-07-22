import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { HomeScreen } from "./app/screens";
import { cover, items } from "./app/data";

export default function App() {
  return <HomeScreen items={items} cover={cover} />;
}
