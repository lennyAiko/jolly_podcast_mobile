import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveToStorage = async (key: string, value: string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (err) {
    console.log(`Error saving to storage: ${err}`);
  }
};

export const getFromStorage = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    console.log(`Error getting from storage: ${err}`);
  }
};

export const removeFromStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {
    console.log(`Error removing from storage: ${err}`);
  }
};
