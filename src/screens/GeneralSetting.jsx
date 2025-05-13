import React from 'react';
import { View, Text, Pressable, FlatList } from 'react-native';
// import { ArrowRight } from 'lucide-react-native'; 


const settingsData = [
  { title: 'Language Setting', route: 'Language' },
  { title: 'Notification Setting', route: 'Notification' },
  { title: 'About EVNC', route: 'About' },
  { title: 'Term of Use', route: 'Terms' },
  { title: 'Privacy Policy', route: 'Privacy' },
];

const GeneralSettingsScreen = () => {
//   const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate(item.route)}
      className="bg-black rounded-xl px-4 py-5 flex-row items-center justify-between mb-3"
    >
      <Text className="text-white text-base">{item.title}</Text>
      {/* <ArrowRight size={20} color="#fff" /> */}
    </Pressable>
  );
  return (
    <View className="flex-1 bg-[#111111] px-4 pt-6">
      <Text className="text-white text-lg font-semibold mb-6">General Settings</Text>
      <FlatList
        data={settingsData}
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default GeneralSettingsScreen;
