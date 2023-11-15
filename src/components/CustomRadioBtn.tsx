import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { RadioButton } from 'react-native-paper';

interface RadioButtonProps {
  option: string;
  selectedOption: string | null;
  onSelect: (value: string) => void;
}

const CustomRadioBtn: React.FC<RadioButtonProps> = ({ option, selectedOption, onSelect }) => {
  const handlePress = () => {
    onSelect(option);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.radioButton, { borderColor: selectedOption === option ? 'green' : 'lightgrey' }]}>
        <RadioButton
          value={option}
          color="green"
          testID={option}
          status={selectedOption === option ? 'checked' : 'unchecked'}
        />
        <Text>{option}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
});

export default CustomRadioBtn;
