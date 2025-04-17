import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Input, Overlay, Text} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from "../styles/colors.ts";

interface DropdownInputProps {
  label: string;
  options?: string[];
  initialValue?: string;
  onValueChange?: (value: string) => void;
}

const DropdownInput: React.FC<DropdownInputProps> = ({
  label,
  options = ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5'],
  initialValue = '',
  onValueChange,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [value, setValue] = useState<string>(initialValue);

  const toggleOverlay = (): void => {
    setVisible(!visible);
  };

  const selectOption = (option: string): void => {
    setValue(option);
    if (onValueChange) {
      onValueChange(option);
    }
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Input
        editable={false}
        disabledInputStyle={{
          borderColor: '#6E6E73',
        }}
        label={label}
        labelStyle={{
          fontSize: 14,
          fontWeight: '400',
        }}
        value={value}
        inputContainerStyle={styles.optionInputContainer}
        inputStyle={{
          borderWidth: 1,
          borderColor: '#6E6E73',
          borderRadius: 8,
          paddingHorizontal: 10,
          paddingVertical: 8,
        }}
        rightIcon={
          <TouchableOpacity onPress={toggleOverlay}>
            <Ionicons size={24} color="#86939e" name={'chevron-down'} />
          </TouchableOpacity>
        }
      />

      <Overlay
          isVisible={visible}
          onBackdropPress={toggleOverlay}
          overlayStyle={styles.overlay}>
        <View style={styles.dropdownContainer}>
          <View style={styles.optionsWrapper}>
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.optionItem}
                    onPress={() => selectOption(option)}>
                  <View style={{
                    backgroundColor: colors.primary,
                    padding: 12,
                    borderRadius: 100,
                    width: 50,
                    height: 50,
                    marginBottom: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={{color: "white"}}>{option}</Text>
                  </View>
                </TouchableOpacity>
            ))}
          </View>
        </View>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    width: '100%',
  },
  optionContainer: {
    borderBottomColor: '#e1e8ee',
    marginBottom: 0,
    paddingHorizontal: 10,
  },
  overlay: {
    width: '80%',
    padding: 10,
    borderRadius: 5,
  },
  dropdownContainer: {
    width: '100%',
  },
  optionsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  optionItem: {
    margin: 5,
  },
  optionInputContainer: {
    borderBottomWidth: 0,
  },
  optionText: {
    color: 'black',
  },
});

export default DropdownInput;
