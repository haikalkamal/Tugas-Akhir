import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import fotomamang from '../fotomamang.png';
import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

const DaftarLanggananPetugas = () => {

    const navigation = useNavigation();

    const onLanggananPetugasPress = () => {
        navigation.navigate('LanggananPetugas');
    };
    const onTabsPetugasPress = () => {
        navigation.navigate('TabsPetugas');
    };
    return (
        <View>
            <Component1 />
            <Component2 />

            <CustomButton
                text="Ganda Pradana K"
                onPress={onLanggananPetugasPress}
                bgColor="transparent"
                fontWeight="400"
                fgColor="#000000"
                marginTop={-690}
                marginLeft={-194}
                fontSize={12}
            />
        </View>
    );
};

const Component1 = () => {
    return (
        <View>
            <Text style={{ fontSize: 15, marginTop: 25, fontWeight: '400', marginLeft: 25, color: '#000000', }}>Daftar pengguna yang berlangganan</Text>
        </View>
    );
};

const Component2 = () => {
    return (
        <View>
            <View style={{ marginTop: 20, marginLeft: 2, backgroundColor: '#FFFFFF', width: 390, height: 700, borderRadius: 15, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, }}>
                <View style={{ marginTop: 25, marginLeft: 30, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#C4C4C4', width: 325, height: 75, borderRadius: 14 }}>

                    <Text style={{ fontSize: 10, marginLeft: 60, marginTop: 15, fontWeight: '400', textAlign: 'left', color: '#4F4F4F', }}> </Text>
                    <Text style={{ fontSize: 11, marginLeft: 270, marginTop: -13, fontWeight: '400', color: '#000000', }}>500 m</Text>
                    <Text style={{ fontSize: 11, marginLeft: 270, marginTop: 5, fontWeight: '400', color: '#000000', }}>3 min</Text>
                    <Text style={{ fontSize: 12, marginLeft: 20, marginTop: -15, fontWeight: '540000', textAlign: 'left', color: '#000000', }}>0898 - 8989 - 8989</Text>
                    
                </View>
            </View>
        </View>
    );
};

export default DaftarLanggananPetugas;