// /screens/Profile.js
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Profile() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    // replace with your own avatar asset
    avatar: require("../../assets/avatar.png"),
  };

  return (
    <SafeAreaView className="flex-1 bg-white items-center pt-10">
      <Image
        source={user.avatar}
        className="w-32 h-32 rounded-full mb-6"
        resizeMode="cover"
      />

      <Text className="text-xl font-semibold">{user.name}</Text>
      <Text className="text-gray-500 mb-6">{user.email}</Text>

      <TouchableOpacity className="bg-blue-500 px-6 py-3 rounded-full">
        <Text className="text-white font-medium">Edit Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
