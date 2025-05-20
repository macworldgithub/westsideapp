// /screens/Splash.js
import React from "react";
import { View, Image } from "react-native";

export default function Splash() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image
        source={require("../../assets/splash.png")}
        className=" flex-1 w-full h-full bg-black"
        resizeMode="contain"
      />
    </View>
  );
}
