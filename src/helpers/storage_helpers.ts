import AsyncStorage from '@react-native-async-storage/async-storage';
import {ReminderKey} from './storage_keys.ts';
import {MedicineEntry} from '../model/reminder_model.ts';
import {SaveStatus} from '../type.ts';

export const storeReminder = async (
    entry: MedicineEntry,
): Promise<SaveStatus> => {
  try {
    const existingReminders = await getReminder();
    const updatedReminders = [...existingReminders, entry];

    const jsonValue = JSON.stringify(updatedReminders);
    await AsyncStorage.setItem(ReminderKey, jsonValue);

    console.log('Data saved successfully!');
    return { success: true, message: 'Data saved successfully! 🎉' };
  } catch (error) {
    console.error('Error saving data to storage', error);
    return { success: false, message: 'Data could not be saved' };
  }
};

export const getReminder = async (): Promise<MedicineEntry []> => {
  try {
    const jsonValue = await AsyncStorage.getItem(ReminderKey);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error reading reminders from storage', error);
    return [];
  }
};
