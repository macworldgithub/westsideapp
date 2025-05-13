import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Platform } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const NewCarRegistration = () => {
  const [form, setForm] = useState({
    driverName: '',
    carPlate: '',
    carName: '',
    carModel: '',
    carYear: '',
    note: '',
    imageUri: null,
  });

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleImagePick = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });
    if (!result.didCancel && result.assets?.length > 0) {
      handleChange('imageUri', result.assets[0].uri);
    }
  };

  const handleCaptureImage = async () => {
    const result = await launchCamera({ mediaType: 'photo' });
    if (!result.didCancel && result.assets?.length > 0) {
      handleChange('imageUri', result.assets[0].uri);
      
    }
  };

  const handleSubmit = () => {
    console.log('Form Data:', form);
    
  };

  return (
    <ScrollView className="flex-1 bg-black px-4 pt-10 pb-6" contentContainerStyle={{ paddingBottom: 40 }}>
      <Text className="text-white text-xl font-semibold mb-6">New Car Registration</Text>

      {[
        { label: 'Driver Name', key: 'driverName' },
        { label: 'Car Plate', key: 'carPlate' },
        { label: 'Car Name', key: 'carName' },
        { label: 'Car Model', key: 'carModel' },
        { label: 'Car Year', key: 'carYear' },
      ].map(field => (
        <View key={field.key} className="mb-4">
          <Text className="text-white mb-1">{field.label}</Text>
          <TextInput
            className="bg-white text-black rounded-xl px-4 py-2"
            placeholder={field.label}
            placeholderTextColor="#999"
            value={form[field.key]}
            onChangeText={text => handleChange(field.key, text)}
          />
        </View>
      ))}

      <View className="mb-4">
        <Text className="text-white mb-1">Note:</Text>
        <View className="flex-row items-start bg-white border rounded-xl px-3 pt-2 pb-2">

          <TextInput
            className="flex-1 text-white text-top h-24"
            multiline
            textAlignVertical="top"
            numberOfLines={4}
            placeholder="Note......"
            placeholderTextColor="#999"
            value={form.note}
            onChangeText={text => handleChange('note', text)}
          />
        </View>
      </View>
      <View className="mb-4">
        <Text className="text-white mb-2">Image Upload</Text>
        <View className="flex-row justify-between">
          <TouchableOpacity
            className="bg-gray-800 flex-1 mr-2 py-4 rounded-xl items-center"
            onPress={handleImagePick}
          >
            <Text className="text-white">Upload Image</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-gray-800 flex-1 ml-2 py-4 rounded-xl items-center"
            onPress={handleCaptureImage}
          >
            <Text className="text-white">Capture Image</Text>
          </TouchableOpacity>
        </View>

        {form.imageUri && (
          <Image
            source={{ uri: form.imageUri }}
            className="w-full h-40 mt-4 rounded-xl"
            resizeMode="cover"
          />
        )}
      </View>

      <TouchableOpacity
        className="bg-black py-3 rounded-xl items-center mt-6 border border-white"
        onPress={handleSubmit}
      >
        <Text className="text-white font-bold">Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default NewCarRegistration;
