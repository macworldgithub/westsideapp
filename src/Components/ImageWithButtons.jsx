import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

const ImageWithButtons = () => (
  <View className="flex-row items-center bg-gray-200 p-4 rounded-xl mb-4">
    <Image
      source={{ uri: '/assets/Car.png' }}
      className="w-20 h-20 rounded-full mr-4"
    />
    <View>
      <TouchableOpacity className="bg-gray-500 py-1 px-4 rounded-full mb-2">
        <Text className="text-white text-center">Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-gray-500 py-1 px-4 rounded-full">
        <Text className="text-white text-center">WorkOrder</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default ImageWithButtons;
