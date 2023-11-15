import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import CustomRadioBtn from '../../../components/CustomRadioBtn';


const Options = () => {
    return (
        <>
            <AllergiesOptions />
            <NumberOptions />
            <DietOptions />
        </>
    )
}

const DietOptions: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleOptionPress = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <View style={styles.container}>
            <Text>I am..</Text>
            <RadioButton.Group onValueChange={(value) => handleOptionPress(value)} value={selectedOption}>
                {/* <View style={styles.radioButtonContainer}> */}
                <CustomRadioBtn option="Vegetarian" selectedOption={selectedOption} onSelect={handleOptionPress} />
                <CustomRadioBtn option="Vegan" selectedOption={selectedOption} onSelect={handleOptionPress} />
                {/* </View> */}
            </RadioButton.Group>
        </View>
    );
};

const NumberOptions: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleOptionPress = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <View style={styles.container}>
            <Text>I usually cook for...</Text>
            <RadioButton.Group onValueChange={(value) => handleOptionPress(value)} value={selectedOption}>
                <CustomRadioBtn option="2 people" selectedOption={selectedOption} onSelect={handleOptionPress} />
                <CustomRadioBtn option="4 people" selectedOption={selectedOption} onSelect={handleOptionPress} />
            </RadioButton.Group>
        </View>
    );
};

const AllergiesOptions: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleOptionPress = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <View style={styles.container}>
            <Text>Do you have allergies?</Text>
            <RadioButton.Group onValueChange={(value) => handleOptionPress(value)} value={selectedOption}>
                <View style={styles.radioButtonContainer}>
                    <View style={{ flex: 1 }}><CustomRadioBtn option="yes" selectedOption={selectedOption} onSelect={handleOptionPress} /></View>
                    <View style={{ flex: 1 }}><CustomRadioBtn option="no" selectedOption={selectedOption} onSelect={handleOptionPress} /></View>
                </View>
            </RadioButton.Group>
        </View>
    );
};

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
        // resizeMode: 'stretch',
        objectFit: 'contain'
    },
});


export default Options