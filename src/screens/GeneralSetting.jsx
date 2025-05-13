import React from 'react';
import { View, Text, Pressable, FlatList, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'; 

const settingsData = [
  { title: 'Language Setting', route: 'Language' },
  { title: 'Notification Setting', route: 'Notification' },
  { title: 'About EVNC', route: 'About' },
  { title: 'Term of Use', route: 'Terms' },
  { title: 'Privacy Policy', route: 'Privacy' },
];

const GeneralSettingsScreen = () => {

  const renderItem = ({ item }) => (
    <Pressable
      className="bg-black rounded-xl px-4 py-5 flex-row items-center justify-between mb-3"
    >
      <Text className="text-white text-base">{item.title}</Text>
      <Feather name="chevron-right" size={20} color="#fff" />
    </Pressable>
  );

  return (
    <View className="flex-1 bg-[#111111] pt-16 px-4 ">
    <View className="flex-row ">
      {/* Back Button */}
      <Pressable 
      className="mb-6 w-6 h-6">
        <Image source={require('../../assets/back.png')} className="w-6 h-6" />
      </Pressable>

      <Text className="text-white text-lg font-semibold mb-6 ml-4">General Settings</Text>
</View>
<View>
      <FlatList
        data={settingsData}
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
    </View>
  );
};

export default GeneralSettingsScreen;
