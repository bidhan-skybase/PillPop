import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {Button, Text} from '@rneui/themed';
import {getReminder} from '../../helpers/storage_helpers.ts';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>💊 Medicine Reminder App</Text>
      <Text style={styles.subtitle}>Stay healthy, stay on time.</Text>
      <Text h2>Welcome to My App</Text>
      <Button
        title="Click Me"
        onPress={async () => {

          console.log('clicked');
          const reminder = await getReminder();
            console.log(reminder?.length)
        }}
      />

        <Button
            title="REMOVE"
            onPress={async () => {
                const keys = await AsyncStorage.getAllKeys()
                await AsyncStorage.multiRemove(keys)
            }}
        />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});
