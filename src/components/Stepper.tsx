import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Typography from './Typography/Typography';

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
    return (
        <View style={styles.container}>
        {steps.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <View style={{ alignItems:'center'}}>
            <View style={[styles.circle, index <= currentStep && styles.activeCircle]}>
              {index < currentStep ? (
                <Icon name="checkmark" style={styles.icon} size={16} />
              ) : (
                <Text style={index === currentStep ? styles.activeStepText : styles.stepText}>{index + 1}</Text>
              )}
              
            </View>
            <View style={{}}><Typography variant='caption' textAlign='center'>{step}</Typography></View>
            </View>
            {index < steps.length - 1 && <View style={styles.line} />}
          </View>
        ))}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    icon:{
      color: 'white'
    },
    stepContainer: {
      width: 80,
      minWidth:80,
      alignItems:'center',
      justifyContent:'center',
      flexDirection: 'row',
      position:'relative',
      alignSelf:'flex-start',
    },
    circle: {
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: '#D4D4D4',
      borderWidth: 3,
      borderColor: '#D4D4D4',
      justifyContent: 'center',
      alignItems: 'center',
    },
    activeCircle: {
      borderColor: 'green',
      backgroundColor: 'green',

    },
    line: {
      height: 3,
      position:'absolute',
      top:15,
      left:55,
      width: 50,
      backgroundColor: '#D4D4D4',
    },
    stepText: {
      fontSize: 16,
    },
    activeStepText: {
      fontSize: 16,
      color: 'white',
    },
  });
export default Stepper;
