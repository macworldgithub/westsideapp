import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    // your auth logic…
    const fakeToken = "abc123";
    onLogin(fakeToken);
  };

  return (
    <View className="flex-1 items-center justify-center px-4 bg-gray-50">
      <TextInput
        className="w-full border p-2 mb-4 rounded"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="w-full border p-2 mb-6 rounded"
        placeholder="Password"
        secureTextEntry
        value={pass}
        onChangeText={setPass}
      />
      <Button title="Sign In" onPress={handleSubmit} />
    </View>
  );
}
