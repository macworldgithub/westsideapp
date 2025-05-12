import React from 'react';
import { TextInput, View } from 'react-native';

const Search = () => (
  <View className="mb-4">
    <TextInput
      placeholder="Search any car with plate Number"
      className="border border-gray-300 p-3 rounded-full"
    />
  </View>
);

export default Search;
