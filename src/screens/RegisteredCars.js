import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import Button from "../components/Button";

const RegisteredCars = () => {
  return (
    <View className="flex-1 bg-black px-4 pt-8">
      {/* Header Row */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-white text-xl font-semibold">
          Registered Cars
        </Text>
        <Button />
      </View>

      {/* Search and Filter */}
      <View className="flex-row items-center bg-white rounded-xl px-4 py-2 mb-4">
        <FontAwesome name="search" size={18} color="#aaa" />
        <TextInput
          placeholder="Search any car with plate number"
          placeholderTextColor="#aaa"
          className="ml-2 text-white flex-1"
        />
        <Feather name="filter" size={20} color="#aaa" />
      </View>

      {/* Filter Tabs */}
      <View className="flex-row mb-4 space-x-3">
        <TouchableOpacity className="bg-white px-4 py-1 rounded-full">
          <Text className="text-black text-sm font-semibold">On going</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#2F2F2F] px-4 py-1 rounded-full">
          <Text className="text-white text-sm font-semibold">Next 5 Days</Text>
        </TouchableOpacity>
      </View>

      {/* Car Cards */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <View key={index} className="flex-row bg-white rounded-xl p-3 mb-4">
              <Image
                source={require("../../assets/Car.png")}
                className="w-20 h-20 rounded-lg"
                resizeMode="cover"
              />
              <View className="flex-1 ml-3 justify-between">
                <Text className="text-black text-base font-bold">BMW</Text>
                <Text className="text-gray-400 text-xs">
                  Due on 11 sep, 2023
                </Text>
                <Text className="text-gray-400 text-xs">Paint Work</Text>
                <Text className="text-gray-400 text-xs">👤 Chris</Text>
                <Text className="text-gray-400 text-xs">📞 +1202-555-0877</Text>
              </View>
              <View className="justify-between ml-2">
                <TouchableOpacity className="bg-gray-300 px-2 py-1 rounded-full">
                  <Text className="text-black text-xs text-center">Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-gray-300 px-4 py-1 rounded-full mb-9">
                  <Text className="text-black text-xs text-center">
                    Work Order
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default RegisteredCars;
