import Colors from '../../styles/colors.ts';
import {View} from 'react-native';
import {Chip, Text} from '@rneui/themed';
import Gap from '../gap.tsx';
import FAIcons from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {styles} from './style';
import {MedicineEntry} from "../../model/reminder_model.ts";

type Props={
    props:MedicineEntry
}

export default function MedicineCard (props:Props) {
  return (
    <View
      style={styles.medicineCard}>
      <View style={{flexDirection: 'row', gap: 12}}>
        <Chip title={props.props.selectedMedicine}></Chip>
        <Chip
          title={props.props.dosage}
          color="#BCD8FA"
          titleStyle={{color: '#205fff'}}></Chip>
        <Chip
          title={props.props.selectedHabit}
          color="#FCEDE2"
          titleStyle={{color: '#FAB048'}}></Chip>
      </View>
      <Gap size={16} />

      <Text style={{fontSize: 22, fontWeight: 600}}>{props.props.medicineName}</Text>
      <Gap size={16} />
      <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
        <Text style={{fontSize: 12, fontWeight: 500, color: Colors.secondary}}>{
            props.props.time
        }
        </Text>
        <FAIcons name={'circle'} size={8} color={Colors.secondary}></FAIcons>
        <Text style={{fontSize: 12, fontWeight: 500, color: Colors.secondary}}>
            {
                props.props.selectedDays
            }
        </Text>
      </View>
    </View>
  );
}
