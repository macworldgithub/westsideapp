// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   Image,
// } from "react-native";
// import { launchCamera, launchImageLibrary } from "react-native-image-picker";
// import { useNavigation } from "@react-navigation/native";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import { PermissionsAndroid, Platform } from "react-native";
// import * as Linking from "expo-linking";
// const NewCarRegistration = () => {
//   const navigation = useNavigation();
//   const [form, setForm] = useState({
//     driverName: "",
//     carPlate: "",
//     carName: "",
//     carModel: "",
//     carYear: "",
//     note: "",
//     imageUri: null,
//   });
//   const openAppSettings = () => {
//     Linking.openSettings();
//   };

//   const handleChange = (key, value) => {
//     setForm((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleImagePick = () => {
//     launchImageLibrary({ mediaType: "photo", quality: 0.5 }, (response) => {
//       if (response.didCancel) return;
//       if (response.errorCode) {
//         console.warn("Image picker error:", response.errorMessage);
//         return;
//       }
//       const asset = response.assets?.[0];
//       if (asset?.uri) {
//         handleChange("imageUri", asset.uri);
//       }
//     });
//   };

//   const handleCaptureImage = () => {
//     launchCamera({ mediaType: "photo", quality: 0.5 }, (response) => {
//       if (response.didCancel) return;
//       if (response.errorCode) {
//         console.warn("Camera error:", response.errorMessage);
//         return;
//       }
//       const asset = response.assets?.[0];
//       if (asset?.uri) {
//         handleChange("imageUri", asset.uri);
//       }
//     });
//   };

//   const handleSubmit = () => {
//     console.log("Form Data:", form);
//   };

//   const requestCameraPermission = async () => {
//     if (Platform.OS === "android") {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           title: "Camera Permission",
//           message: "App needs access to your camera",
//           buttonNeutral: "Ask Me Later",
//           buttonNegative: "Cancel",
//           buttonPositive: "OK",
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true;
//   };

//   const requestGalleryPermission = async () => {
//     if (Platform.OS === "android") {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
//         {
//           title: "Gallery Access Permission",
//           message: "App needs access to your photo gallery",
//           buttonNeutral: "Ask Me Later",
//           buttonNegative: "Cancel",
//           buttonPositive: "OK",
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true;
//   };

//   return (
//     <ScrollView
//       className="flex-1 bg-black px-4 pt-10 pb-6"
//       contentContainerStyle={{ paddingBottom: 40 }}
//     >
//       {/* Header */}
//       <View className="flex-row items-center mb-6">
//         <TouchableOpacity onPress={() => navigation.goBack()} className="mr-4">
//           <Image
//             source={require("../../assets/back.png")}
//             style={{ width: 24, height: 24 }}
//             resizeMode="contain"
//           />
//         </TouchableOpacity>
//         <Text className="text-white text-xl font-semibold">
//           New Car Registration
//         </Text>
//       </View>

//       {/* Input Fields */}
//       {[
//         { label: "Driver Name", key: "driverName" },
//         { label: "Car Plate", key: "carPlate" },
//         { label: "Car Name", key: "carName" },
//         { label: "Car Model", key: "carModel" },
//         { label: "Car Year", key: "carYear" },
//       ].map((field) => (
//         <View key={field.key} className="mb-4">
//           <Text className="text-white mb-1">{field.label}</Text>
//           <TextInput
//             className="bg-white text-black rounded-xl px-4 py-2"
//             placeholder={field.label}
//             placeholderTextColor="#999"
//             value={form[field.key]}
//             onChangeText={(text) => handleChange(field.key, text)}
//           />
//         </View>
//       ))}

//       {/* Note */}
//       <View className="mb-4">
//         <Text className="text-white mb-1">Note:</Text>
//         <View className="bg-white rounded-xl px-4 pt-2 pb-2">
//           <TextInput
//             className="text-black h-24"
//             multiline
//             textAlignVertical="top"
//             numberOfLines={4}
//             placeholder="Note......"
//             placeholderTextColor="#999"
//             value={form.note}
//             onChangeText={(text) => handleChange("note", text)}
//           />
//         </View>
//       </View>

//       {/* Image Upload */}
//       <View className="mb-6">
//         <Text className="text-white mb-2">Image Upload</Text>
//         <View className="flex-row space-x-4">
//           <TouchableOpacity
//             onPress={handleImagePick}
//             className="flex-1 bg-gray-200 rounded-xl py-6 items-center justify-center"
//           >
//             <MaterialCommunityIcons name="upload" size={28} color="black" />
//             <Text className="text-black font-semibold mt-1 text-sm">
//               Upload
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={handleCaptureImage}
//             className="flex-1 bg-gray-200 rounded-xl py-6 items-center justify-center ml-5"
//           >
//             <MaterialCommunityIcons name="camera" size={28} color="black" />
//             <Text className="text-black font-semibold mt-1 text-sm">
//               Capture
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {form.imageUri && (
//           <Image
//             source={{ uri: form.imageUri }}
//             className="w-full h-28 mt-4 rounded-xl"
//             resizeMode="cover"
//           />
//         )}
//       </View>

//       {/* Submit */}
//       <TouchableOpacity
//         className="bg-black py-3 rounded-xl items-center  border border-white"
//         onPress={handleSubmit}
//       >
//         <Text className="text-white font-bold">Save</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// export default NewCarRegistration;


import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import * as Linking from "expo-linking";

const NewCarRegistration = () => {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    driverName: "",
    carPlate: "",
    carName: "",
    carModel: "",
    carYear: "",
    note: "",
    imageUri: null,
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const requestPermissions = async () => {
    const { status: cameraStatus } =
      await ImagePicker.requestCameraPermissionsAsync();
    const { status: libraryStatus } =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (cameraStatus !== "granted" || libraryStatus !== "granted") {
      Alert.alert(
        "Permissions Required",
        "Please enable camera and media library permissions in your device settings.",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Open Settings", onPress: () => Linking.openSettings() },
        ]
      );
      return false;
    }

    return true;
  };

  const handleImagePick = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });

    if (!result.canceled && result.assets.length > 0) {
      handleChange("imageUri", result.assets[0].uri);
    }
  };

  const handleCaptureImage = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });

    if (!result.canceled && result.assets.length > 0) {
      handleChange("imageUri", result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    console.log("Form Data:", form);
  };

  return (
    <ScrollView
      className="flex-1 bg-black px-4 pt-10 pb-6"
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      {/* Header */}
      <View className="flex-row items-center mb-6">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-4">
          <Image
            source={require("../../assets/back.png")}
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text className="text-white text-xl font-semibold">
          New Car Registration
        </Text>
      </View>

      {/* Input Fields */}
      {[
        { label: "Driver Name", key: "driverName" },
        { label: "Car Plate", key: "carPlate" },
        { label: "Car Name", key: "carName" },
        { label: "Car Model", key: "carModel" },
        { label: "Car Year", key: "carYear" },
      ].map((field) => (
        <View key={field.key} className="mb-4">
          <Text className="text-white mb-1">{field.label}</Text>
          <TextInput
            className="bg-white text-black rounded-xl px-4 py-2"
            placeholder={field.label}
            placeholderTextColor="#999"
            value={form[field.key]}
            onChangeText={(text) => handleChange(field.key, text)}
          />
        </View>
      ))}

      {/* Note */}
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
            onChangeText={(text) => handleChange("note", text)}
          />
        </View>
      </View>

      {/* Image Upload */}
      <View className="mb-6">
        <Text className="text-white mb-2">Image Upload</Text>
        <View className="flex-row space-x-4">
          <TouchableOpacity
            onPress={handleImagePick}
            className="flex-1 bg-gray-200 rounded-xl py-6 items-center justify-center"
          >
            <MaterialCommunityIcons name="upload" size={28} color="black" />
            <Text className="text-black font-semibold mt-1 text-sm">
              Upload
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleCaptureImage}
            className="flex-1 bg-gray-200 rounded-xl py-6 items-center justify-center ml-5"
          >
            <MaterialCommunityIcons name="camera" size={28} color="black" />
            <Text className="text-black font-semibold mt-1 text-sm">
              Capture
            </Text>
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

      {/* Submit */}
      <TouchableOpacity
        className="bg-black py-3 rounded-xl items-center border border-white"
        onPress={handleSubmit}
      >
        <Text className="text-white font-bold">Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default NewCarRegistration;
