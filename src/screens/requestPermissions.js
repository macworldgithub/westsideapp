import * as ImagePicker from 'expo-image-picker';
const requestPermissions = async () => {
  const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
  const mediaLibraryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (!cameraPermission.granted || !mediaLibraryPermission.granted) {
    alert('Permissions are required to access the camera and media library.');
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
