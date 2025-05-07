import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {MedicineEntry} from '../../model/reminder_model.ts';
import {getReminder} from '../../helpers/storage_helpers.ts';
import styles from './styles.ts';
import Gap from '../../component/gap.tsx';
import {Button, Text} from '@rneui/themed';
import MedicineCard from '../../component/medicine_card';
import NetInfo from '@react-native-community/netinfo';

export default function HomeScreen() {
  const [reminders, setReminders] = useState<MedicineEntry[]>([]);
  const [pressed, setPressed] = useState(false);
  useEffect(() => {
    const fetchReminders = async () => {
      const reminders = await getReminder(); // assuming this returns a Promise
      setReminders(reminders);
    };

    fetchReminders();
  }, []);
  console.log(reminders.length);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text h4>Welcome Back!</Text>
        <Button
            title={'Continue'}
            testID={'continue_button'}
            onPress={() => {
              setPressed(true);
            }}
        />
        {pressed && <Text testID="confirmation_text">You pressed the button!</Text>}
        <Gap size={12} />
        <Text style={{fontSize: 14, color: '#6E6E73'}}>
          Your reminders.Make sure you take your medications on time.
        </Text>
        <Gap size={32} />
        <FlatList
          data={reminders}
          keyExtractor={(item, index) => index.toString()} // optional but recommended
          renderItem={({item}) => {
            return <MedicineCard props={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
}
