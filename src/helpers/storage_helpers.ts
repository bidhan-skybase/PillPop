import AsyncStorage from '@react-native-async-storage/async-storage';
import {ReminderKey} from './storage_keys.ts';
import {MedicineEntry} from "../model/reminder_model.ts";

export const storeReminder = async (entry: MedicineEntry) => {
  try {
    const jsonValue = JSON.stringify(entry);
    await AsyncStorage.setItem(ReminderKey, jsonValue);
    console.log('Data saved successfully!');
  } catch (error) {
    console.error('Error saving data to storage', error);
  }
};

export const getReminder = async (): Promise<MedicineEntry | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(ReminderKey);
    if (jsonValue !== null) {
      return JSON.parse(jsonValue) as MedicineEntry;
    }
    console.log('No reminder data found');
    return null;
  } catch (error) {
    console.error('Error retrieving reminder from storage', error);
    return null;
  }
};


