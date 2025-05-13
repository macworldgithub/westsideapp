import React, { useState } from "react";
import { View, Text, Pressable, Image, FlatList } from "react-native";

const languages = [
  { name: "English", flag: require("../../assets/flag1.png") },
  { name: "Bahasa Indonesia", flag: require("../../assets/flag2.png") },
  { name: "中国人", flag: require("../../assets/flag3.png") },
  { name: "한국어", flag: require("../../assets/flag4.png") },
];

const LanguageScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const renderItem = ({ item }) => {
    const isSelected = item.name === selectedLanguage;

    return (
      <Pressable
        onPress={() => setSelectedLanguage(item.name)}
        className={`flex-row items-center px-4 py-4 mb-3 rounded-xl ${
          isSelected ? "border border-white" : "bg-black"
        }`}
      >
        <Image source={item.flag} className="w-6 h-6 mr-4 rounded-full" />
        <Text className="text-white text-base">{item.name}</Text>
      </Pressable>
    );
  };

  return (
    <View className="flex-1 bg-[#111111] px-4 pt-16">
      <Image
        source={require("../../assets/back.png")}
        className="w-6 h-6 mr-4" />
      <Text className="text-white text-lg font-semibold mb-6">Language</Text>

      <FlatList
        data={languages}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      />

      <Pressable className="bg-black mt-auto py-4 rounded-xl items-center justify-center mb-6">
        <Text className="text-white font-semibold text-base">Save Change</Text>
      </Pressable>
    </View>
  );
};

export default LanguageScreen;
