import { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import Stepper from "../../../components/Stepper";
import Typography from "../../../components/Typography/Typography";

const Header = () => {

    const steps = ['Deliveries', 'Food preferences', 'Confirm', 'Done'];
    const [currentStep, setCurrentStep] = useState(2);
    return (
      <>
        <View style={styles.container}>
          <Typography variant="heading" textAlign='center' bold>
            Complete your profile
          </Typography>
          <Stepper steps={steps} currentStep={currentStep} />
        </View>
  
        <Image source={require('../../../assets/WhatsInThebox.png')} style={styles.image} /></>
    )
  }

  const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      padding: 20,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 8
    },
    scrollContainer: {
      flexGrow: 1,
    },
    radioButtonContainer: {
      flexDirection: 'row',
    },
    image: {
      width: '100%',
      height: 100,
      objectFit:'fill'
    },
  });

  export default Header