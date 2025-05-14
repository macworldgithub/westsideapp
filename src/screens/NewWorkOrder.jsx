// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
//   Modal,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Feather';
// import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

// const NewWorkOrderScreen = () => {
//   const navigation = useNavigation();

//   const [form, setForm] = useState({
//     ownerName: '',
//     headMechanicName: '',
//     orderCreatorName: '',
//     email: '',
//     phone: '',
//     startDate: '',
//     finishDate: '',
//     address: '',
//     status: 'In Progress',
//     imageUri: Image.resolveAssetSource(require('../../assets/Car.png')).uri,
//   });

//   const [modalVisible, setModalVisible] = useState(false);

//   const handleChange = (key, value) => {
//     setForm({ ...form, [key]: value });
//   };

//   const handleSubmit = () => {
//     console.log('Form Data:', form);
//   };

//   const pickFromGallery = async () => {
//     const result = await launchImageLibrary({ mediaType: 'photo' });
//     if (!result.didCancel && result.assets?.length > 0) {
//       setForm(prev => ({ ...prev, imageUri: result.assets[0].uri }));
//     }
//     setModalVisible(false);
//   };

//   const takePhoto = async () => {
//     const result = await launchCamera({ mediaType: 'photo' });
//     if (!result.didCancel && result.assets?.length > 0) {
//       setForm(prev => ({ ...prev, imageUri: result.assets[0].uri }));
//     }
//     setModalVisible(false);
//   };

//   const fields = [
//     { key: 'ownerName', label: 'Owner Name', placeholder: 'Enter owner name' },
//     { key: 'headMechanicName', label: 'Head Mechanic Name', placeholder: 'Enter head mechanic name' },
//     { key: 'orderCreatorName', label: 'Order Creator Name', placeholder: 'Enter order creator name' },
//     { key: 'email', label: 'Email', placeholder: 'Enter email' },
//     { key: 'phone', label: 'Phone No.', placeholder: 'Enter phone number' },
//     { key: 'startDate', label: 'Start Date', placeholder: 'DD-MM-YYYY' },
//     { key: 'finishDate', label: 'Work Finish Date', placeholder: 'DD-MM-YYYY' },
//     { key: 'address', label: 'Address', placeholder: 'Enter address' },
//     { key: 'status', label: 'Status', placeholder: 'Enter status' },
//   ];

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       className="flex-1 bg-black"
//     >
//       <ScrollView
//         contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 60, paddingBottom: 40, flexGrow: 1 }}
//         keyboardShouldPersistTaps="handled"
//       >
//         {/* Header */}
//         <View className="flex-row items-center mb-6">
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Image source={require('../../assets/back.png')} className="w-6 h-6 mr-4" />
//           </TouchableOpacity>
//           <Text className="text-white text-xl font-semibold">New Work Order</Text>
//         </View>

//         {/* Form Fields */}
//         {fields.map((field, index) => (
//           <View key={index} className="mb-4">
//             <Text className="text-white mb-1">{field.label}</Text>
//             <TextInput
//               className="bg-neutral-900 text-white border border-gray-700 rounded-lg px-4 py-3"
//               placeholder={field.placeholder}
//               placeholderTextColor="#999"
//               value={form[field.key]}
//               onChangeText={(text) => handleChange(field.key, text)}
//             />
//           </View>
//         ))}

//         {/* Image Upload */}
//         <View className="mt-2 mb-6 relative">
//           <Text className="text-white mb-2">Image Upload</Text>
//           <Image
//             source={{ uri: form.imageUri }}
//             className="w-full h-48 rounded-lg"
//             resizeMode="cover"
//           />
//           <TouchableOpacity
//             onPress={() => setModalVisible(true)}
//             className="absolute top-2 right-2 bg-black/70 p-2 rounded-full"
//           >
//             <Icon name="edit-2" size={18} color="white" />
//           </TouchableOpacity>
//         </View>

//         {/* Modal for Image Options */}
//         <Modal
//           transparent
//           visible={modalVisible}
//           animationType="fade"
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <View className="flex-1 justify-center items-center bg-black/60">
//             <View className="bg-neutral-900 rounded-2xl p-6 w-72">
//               <Text className="text-white text-lg font-semibold mb-4">Change Photo</Text>
//               <TouchableOpacity className="mb-3" onPress={takePhoto}>
//                 <Text className="text-white">📷 Take a Picture</Text>
//               </TouchableOpacity>
//               <TouchableOpacity className="mb-3" onPress={pickFromGallery}>
//                 <Text className="text-white">🖼️ Pick from Gallery</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => setModalVisible(false)}>
//                 <Text className="text-red-400 mt-2 text-center">Cancel</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>

//         {/* Save Button */}
//         <TouchableOpacity
//           className="bg-black py-3 rounded-xl items-center border border-gray-600"
//           onPress={handleSubmit}
//         >
//           <Text className="text-white font-bold">Save</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default NewWorkOrderScreen;


import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Modal,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const NewWorkOrderScreen = () => {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    ownerName: '',
    headMechanicName: '',
    orderCreatorName: '',
    email: '',
    phone: '',
    startDate: '',
    finishDate: '',
    address: '',
    status: 'In Progress',
    imageUri: Image.resolveAssetSource(require('../../assets/Car.png')).uri,
  });

  const [modalVisible, setModalVisible] = useState(false);

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    console.log('Form Data:', form);
    // Add API logic or navigation here
  };

  const requestPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]);
      return (
        granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.READ_MEDIA_IMAGES'] === PermissionsAndroid.RESULTS.GRANTED
      );
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

 const takePhoto = async () => {
  const hasPermission = Platform.OS === 'android' ? await requestPermissions() : true;
  if (!hasPermission) return Alert.alert('Permission denied');

  const result = await launchCamera({ mediaType: 'photo' });
  console.log('Camera Result:', result); // 👈 ADD THIS
  if (!result.didCancel && result.assets?.length > 0) {
    setForm(prev => ({ ...prev, imageUri: result.assets[0].uri }));
  }
  setModalVisible(false);
};

const pickFromGallery = async () => {
  const hasPermission = Platform.OS === 'android' ? await requestPermissions() : true;
  if (!hasPermission) return Alert.alert('Permission denied');

  const result = await launchImageLibrary({ mediaType: 'photo' });
  console.log('Gallery Result:', result); // 👈 ADD THIS
  if (!result.didCancel && result.assets?.length > 0) {
    setForm(prev => ({ ...prev, imageUri: result.assets[0].uri }));
  }
  setModalVisible(false);
};


  const fields = [
    { key: 'ownerName', label: 'Owner Name', placeholder: 'Enter owner name' },
    { key: 'headMechanicName', label: 'Head Mechanic Name', placeholder: 'Enter head mechanic name' },
    { key: 'orderCreatorName', label: 'Order Creator Name', placeholder: 'Enter order creator name' },
    { key: 'email', label: 'Email', placeholder: 'Enter email' },
    { key: 'phone', label: 'Phone No.', placeholder: 'Enter phone number' },
    { key: 'startDate', label: 'Start Date', placeholder: 'DD-MM-YYYY' },
    { key: 'finishDate', label: 'Work Finish Date', placeholder: 'DD-MM-YYYY' },
    { key: 'address', label: 'Address', placeholder: 'Enter address' },
    { key: 'status', label: 'Status', placeholder: 'Enter status' },
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-black"
    >
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 60, paddingBottom: 40, flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View className="flex-row items-center mb-6">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/back.png')} className="w-6 h-6 mr-4" />
          </TouchableOpacity>
          <Text className="text-white text-xl font-semibold">New Work Order</Text>
        </View>

        {/* Input Fields */}
        {fields.map((field, index) => (
          <View key={index} className="mb-4">
            <Text className="text-white mb-1">{field.label}</Text>
            <TextInput
              className="bg-neutral-900 text-white border border-gray-700 rounded-lg px-4 py-3"
              placeholder={field.placeholder}
              placeholderTextColor="#999"
              value={form[field.key]}
              onChangeText={(text) => handleChange(field.key, text)}
            />
          </View>
        ))}

        {/* Image Upload */}
        <View className="mt-2 mb-6 relative">
          <Text className="text-white mb-2">Image Upload</Text>
          <Image
            source={{ uri: form.imageUri }}
            className="w-full h-48 rounded-lg"
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            className="absolute top-2 right-2 bg-black/70 p-2 rounded-full"
          >
            <Icon name="edit-2" size={18} color="white" />
          </TouchableOpacity>
        </View>

        {/* Image Option Modal */}
        <Modal
          transparent
          visible={modalVisible}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View className="flex-1 justify-center items-center bg-black/60">
            <View className="bg-neutral-900 rounded-2xl p-6 w-72">
              <Text className="text-white text-lg font-semibold mb-4">Change Photo</Text>
              <TouchableOpacity className="mb-3" onPress={takePhoto}>
                <Text className="text-white">📷 Take a Picture</Text>
              </TouchableOpacity>
              <TouchableOpacity className="mb-3" onPress={pickFromGallery}>
                <Text className="text-white">🖼️ Pick from Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text className="text-red-400 mt-2 text-center">Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Save Button */}
        <TouchableOpacity
          className="bg-black py-3 rounded-xl items-center border border-gray-600"
          onPress={handleSubmit}
        >
          <Text className="text-white font-bold">Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NewWorkOrderScreen;

