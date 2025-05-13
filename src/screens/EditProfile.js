import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';

export default function EditProfile() {
  const [avatar, setAvatar] = useState(null);

  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (permission.granted === false) {
      alert("Camera access is required!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({ quality: 0.5 });
    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#191919]">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
          {/* Header */}
          <TouchableOpacity className="flex-row items-center py-4">
            <FontAwesome name="angle-left" size={24} color="white" />
            <Text className="text-white text-lg ml-2 font-semibold">Edit Profile</Text>
          </TouchableOpacity>

          {/* Avatar with Camera Icon */}
          <View className="items-center my-6">
            <View className="w-28 h-28 rounded-full bg-[#3a3a3a] justify-center items-center relative">
              {avatar ? (
                <Image
                  source={{ uri: avatar }}
                  className="w-full h-full rounded-full"
                />
              ) : (
                <FontAwesome name="user" size={40} color="white" />
              )}

              {/* Camera Icon */}
              <TouchableOpacity
                onPress={openCamera}
                className="absolute bottom-0 right-0 bg-black p-2 rounded-full border border-white"
              >
                <FontAwesome name="camera" size={16} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Form Inputs */}
          <View className="space-y-6">
            {/* Full Name */}
            <View>
              <Text className="text-white mb-2">Full name</Text>
              <TextInput
                placeholder="Paul Walker"
                placeholderTextColor="#ccc"
                className="bg-black text-white px-4 py-3 rounded-xl text-base"
              />
            </View>

            {/* Email */}
            <View>
              <Text className="text-white mb-2">Email</Text>
              <TextInput
                placeholder="Paulwalker@gmail.com"
                placeholderTextColor="#ccc"
                editable={false}
                className="bg-black text-white px-4 py-3 rounded-xl text-base opacity-50"
              />
            </View>

            {/* Phone Number */}
            <View>
              <Text className="text-white mb-2">Phone number</Text>
              <View className="flex-row items-center bg-black rounded-xl px-4">
                <Image
                  source={{
                    uri: "https://flagcdn.com/w40/id.png", 
                  }}
                  className="w-6 h-4 mr-3"
                />
                <TextInput
                  placeholder="123456789"
                  placeholderTextColor="#ccc"
                  keyboardType="phone-pad"
                  className="flex-1 text-white py-3 text-base"
                />
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Save Button at Bottom */}
        <View className="px-5 pb-6 pt-4">
          <TouchableOpacity className="bg-black py-4 rounded-xl items-center">
            <Text className="text-white text-base font-semibold">Save Changes</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
