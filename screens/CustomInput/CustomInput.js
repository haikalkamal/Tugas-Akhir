import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input} 
        secureTextEntry={secureTextEntry}
        
    />
    </View>
    
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white', 
        width: '100%',
        borderColor: '#C4C4C4',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontalL: 10,
        marginVertical: 5,
    },
    input: {},
});

export default CustomInput;