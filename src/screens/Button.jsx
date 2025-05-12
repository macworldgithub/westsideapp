import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = () => (
  <TouchableOpacity className="bg-gray-500 py-1 px-4 rounded-full mb-2">
          <Text className="text-white text-center">New</Text>
        </TouchableOpacity>
);

export default Button;
