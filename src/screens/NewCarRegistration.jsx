import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NewCarRegistration = () => {
  const navigation = useNavigation();
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
    <ScrollView
      className="flex-1 bg-black px-4 pt-10 pb-6"
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <View className="flex-row">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="mb-4 w-8"
        >
          <Image
            source={require('../../assets/back.png')} // <-- Replace with your actual PNG path
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text className="text-white text-xl font-semibold mb-6">
          New Car Registration
        </Text>
      </View>

      {/* Input Fields */}
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

      {/* Note Field */}
      <View className="mb-4">
        <Text className="text-white mb-1">Note:</Text>
        <View className="bg-white rounded-xl px-4 pt-2 pb-2">
          <TextInput
            className="text-black h-24"
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

      {/* Image Upload Section */}
      <View className="mb-6">
        <Text className="text-white mb-2">Image Upload</Text>
        <View className="flex-row space-x-4">
          <TouchableOpacity
            onPress={handleImagePick}
            className="flex-1 bg-gray-200 rounded-xl py-14 items-center justify-center"
          >
            <MaterialCommunityIcons name="upload" size={38} color="black" />
            <Text className="text-black font-semibold mt-2">Upload</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleCaptureImage}
            className="flex-1 bg-gray-200 rounded-xl py-14 items-center justify-center ml-5"
          >
            <MaterialCommunityIcons name="camera" size={38} color="black" />
            <Text className="text-black font-semibold mt-2">Capture</Text>
          </TouchableOpacity>
        </View>

        {form.imageUri && (
          <Image
            source={{ uri: form.imageUri }}
            className="w-full h-28 mt-4 rounded-xl"
            resizeMode="cover"
          />
        )}
      </View>

      {/* Submit Button */}
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

