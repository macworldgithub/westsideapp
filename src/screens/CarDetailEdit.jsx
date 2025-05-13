import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { launchImageLibrary } from 'react-native-image-picker';

const EditCarDetail = () => {
  const [form, setForm] = useState({
    driverName: 'Paul',
    plate: '12345',
    name: 'BMW',
    model: 'M5',
    year: '2021',
    note: 'This is a note about the car.',
    imageUri: Image.resolveAssetSource(require('../../assets/Car.png')).uri, // update path if needed
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

  const handleSubmit = () => {
    console.log('Submitted Data:', form);
    // Add API or navigation logic here
  };

  return (
    <ScrollView className="flex-1 bg-black px-4 pt-12" contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header */}
      <View className="flex-row items-center mb-6">
        <Icon name="arrow-left" size={20} color="white" />
        <Text className="text-white text-lg font-semibold ml-3">Edit Car Detail</Text>
      </View>

      {/* Image Upload */}
      <Text className="text-white mb-2">Image Upload</Text>
      <View className="relative mb-6">
        <Image
          source={{ uri: form.imageUri }}
          className="w-full h-48 rounded-2xl"
          resizeMode="cover"
        />
        <TouchableOpacity
          onPress={handleImagePick}
          className="absolute top-2 right-2 bg-black/70 p-2 rounded-full"
        >
          <Icon name="edit-2" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      {[
        { label: 'Driver Name', key: 'driverName' },
        { label: 'Plate', key: 'plate' },
        { label: 'Name', key: 'name' },
        { label: 'Model', key: 'model' },
        { label: 'Year', key: 'year' },
      ].map(field => (
        <View key={field.key} className="mb-4">
          <Text className="text-white mb-1">{field.label}</Text>
          <View className="flex-row items-center bg-black border border-gray-500 rounded-xl px-3 py-2">
            <TextInput
              className="flex-1 text-white"
              placeholder={field.label}
              placeholderTextColor="#777"
              value={form[field.key]}
              onChangeText={text => handleChange(field.key, text)}
            />
            <Icon name="edit-2" size={16} color="#aaa" />
          </View>
        </View>
      ))}

      <View className="mb-4">
        <Text className="text-white mb-1">Note:</Text>
        <View className="flex-row items-start bg-black border border-gray-500 rounded-xl px-3 pt-2 pb-2">
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
          <Icon name="edit-2" size={16} color="#aaa" className="mt-3 ml-2" />
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity
        className="bg-black py-3 rounded-xl items-center mb-20 mt-4 border border-gray-600"
        onPress={handleSubmit}
      >
        <Text className="text-white font-bold">Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditCarDetail;
