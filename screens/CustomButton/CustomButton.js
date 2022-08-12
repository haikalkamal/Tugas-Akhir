import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const CustomButton = ({ onPress, 
                        text, 
                        bgColor, 
                        fgColor, 
                        fontWeight, 
                        marginLeft, 
                        marginBottom, 
                        marginTop, 
                        fontSize}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container,bgColor ? {backgroundColor: bgColor}:{}]}>
      <Text style={[styles.text, 
                      fgColor ? {color: fgColor}:{}, 
                      marginLeft ? {marginLeft: marginLeft}:{}, 
                      marginBottom ? {marginBottom: marginBottom}:{}, 
                      marginTop ? {marginTop: marginTop}:{}, 
                      fontSize ? {fontSize: fontSize}:{}, 
                      fontWeight ? {fontWeight: fontWeight}:{}
                      
                  ]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#80D484',
        width: '100%',
        padding: 15,
        marginVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
});

export default CustomButton