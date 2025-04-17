import React, {useState,useEffect} from 'react';
import {View, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import {Text, Input, Button} from '@rneui/themed';
import styles from '../add_reminder/styles.ts';
import Gap from '../../component/gap.tsx';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../styles/colors.ts';
import DropdownInput from '../../component/dropdown.tsx';
import {storeReminder} from '../../helpers/storage_helpers.ts';

import {MedicineEntry} from '../../model/reminder_model.ts';
import Snackbar from 'react-native-snackbar';

export default function ReminderScreen() {
  let medicine = [
    'Pills',
    'Syrups',
    'Injectible',
    'Inhalers',
    'Drops',
    'Ointments',
    'Suppliments',
  ];

  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let eatingHabit = [
    'After eating',
    'While eating',
    'Before eating',
    'Not applicable',
  ];
  const [selectedMedicine, setSelectedMedicine] = useState('');
  const [selectedDays, setSelectedDay] = useState<string[]>([]);
  const [selectedHabit, setSelectedHabit] = useState('');
  const [medicineName, setMedicineName] = useState('');
  const [dosage, setDosage] = useState('');
  const [time, setTime] = useState('');

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text h4>Schedule your medicine</Text>
        <Gap size={12} />
        <Text style={{fontSize: 14, color: '#6E6E73'}}>
          Choose the type of medicine
        </Text>
        <Gap size={32} />
        <View style={{height: 40}}>
          <FlatList
            horizontal
            data={medicine}
            keyExtractor={item => item}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 12}}
            renderItem={({item}) => {
              const isSelected = item === selectedMedicine;

              return (
                <TouchableOpacity
                  onPress={() => setSelectedMedicine(item)}
                  style={[
                    styles.chip,
                    {
                      backgroundColor: isSelected ? '#1F2937' : '#ffffff',
                      borderColor: isSelected ? 'transparent' : '#1F2937',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.chipText,
                      {color: isSelected ? '#ffffff' : '#1F2937'},
                    ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Gap size={16} />
        <View style={{flexDirection: 'row', gap: 0}}>
          <View style={{flex: 7, marginTop: 4}}>
            <Input
              value={medicineName}
              onChangeText={(m: string) => setMedicineName(m)}
              label="Medicine name"
            />
          </View>

          <View style={{flex: 3}}>
            <DropdownInput
              label={'Dosage'}
              onValueChange={(d: string) => setDosage(d)}></DropdownInput>
          </View>
        </View>
        <View style={{height: 80}}>
          <FlatList
            horizontal
            data={days}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 12}}
            keyExtractor={item => item}
            renderItem={({item}) => {
              const isSelected = selectedDays.includes(item);
              return (
                <TouchableOpacity
                  onPress={() => {
                    if (isSelected) {
                      setSelectedDay(selectedDays.filter(day => day !== item));
                    } else {
                      setSelectedDay([...selectedDays, item]);
                    }
                  }}>
                  <View
                    style={[
                      styles.dayButton,
                      {
                        borderColor: isSelected
                          ? colors.primary
                          : colors.secondary,
                      },
                    ]}>
                    <Text
                      style={{
                        fontWeight: isSelected ? '600' : '400',
                        color: isSelected ? colors.primary : colors.secondary,
                      }}>
                      {item}
                    </Text>
                    <Gap size={8} />
                    <Ionicons
                      name={
                        isSelected
                          ? 'checkmark-circle'
                          : 'checkmark-circle-outline'
                      }
                      color={isSelected ? colors.primary : colors.secondary}
                      size={18}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Input
          label={'Time'}
          value={time}
          onChangeText={(t: string) => setTime(t)}></Input>
        <View style={{height: 40}}>
          <FlatList
            horizontal
            data={eatingHabit}
            keyExtractor={item => item}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 12}}
            renderItem={({item}) => {
              const isSelected = item === selectedHabit;

              return (
                <TouchableOpacity
                  onPress={() => setSelectedHabit(item)}
                  style={[
                    styles.chip,
                    {
                      backgroundColor: isSelected ? '#1F2937' : '#ffffff',
                      borderColor: isSelected ? 'transparent' : '#1F2937',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.chipText,
                      {color: isSelected ? '#ffffff' : '#1F2937'},
                    ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={{flex: 1}}></View>
        <Button
          title={'Save changes'}
          onPress={async () => {
            const reminder: MedicineEntry = {
              selectedMedicine,
              medicineName,
              dosage,
              selectedDays,
              time,
              selectedHabit,
            };
            const result = await storeReminder(reminder);
            Snackbar.show({
              text: result.message,
              duration: Snackbar.LENGTH_SHORT,
              backgroundColor: result.success ? 'green' : 'red',

            });
          }}></Button>
      </View>
    </SafeAreaView>
  );
}
