import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = () => (
  <TouchableOpacity className="bg-white py-1 px-6 rounded-full mb-2">
          <Text className="text-black text-center">+New</Text>
        </TouchableOpacity>
);

export default Button;
