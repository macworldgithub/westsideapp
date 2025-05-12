// /screens/Home.js
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

export default function RegisteredCars() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* Header */}
        <Text className="text-2xl font-bold mb-6">Welcome to Westside App</Text>

        {/* Quick Actions */}
        <View className="bg-gray-100 rounded-lg p-4 mb-6">
          <Text className="text-lg font-semibold mb-4">Quick Actions</Text>
          <View className="flex-row space-x-4">
            <TouchableOpacity className="flex-1 bg-blue-500 rounded-lg py-3 items-center">
              <Text className="text-white font-medium">New Inspection</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 bg-green-500 rounded-lg py-3 items-center">
              <Text className="text-white font-medium">View Reports</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Activities */}
        <Text className="text-xl font-semibold mb-4">Recent Activities</Text>
        <View className="space-y-4">
          <View className="bg-white shadow rounded-lg p-4">
            <Text className="font-medium">Inspection #1234 Completed</Text>
            <Text className="text-gray-500 mt-1">2 hours ago</Text>
          </View>
          <View className="bg-white shadow rounded-lg p-4">
            <Text className="font-medium">Uploaded 5 Photos</Text>
            <Text className="text-gray-500 mt-1">Yesterday</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
