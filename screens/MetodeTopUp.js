import React from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import fotomamang from '../fotomamang.png';
import bca from '../bca.png';
import mandiri from '../mandiri.png';
import garis from '../garis.png';
import { useNavigation } from '@react-navigation/native';
import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';

const MetodeTopUp = () => {

    const navigation = useNavigation();

    const onIsiSaldoPress = () => {
        navigation.navigate('IsiSaldo');
      };
      
    return (
        <View>
            <Component1 />
            <Component2 />
            <CustomButton
                text="Bank BCA"
                onPress={onIsiSaldoPress}
                bgColor="transparent"
                fontWeight="400"
                fgColor="#4F4F4F"
                marginTop={-709}
                marginLeft={-177}
                fontSize={12}
            />
        </View>
    );
}

const Component1 = () => {
    return (
        <View>
            <Text style={{ fontSize: 14, marginTop: 15, fontWeight: '500', marginLeft: 25, color: '#4F4F4F', }}>Pilih Metode Untuk Top Up Saldo</Text>
        </View>
    );
};

const Component2 = () => {
    return (
        <View>
            <View style={{ marginTop: 20, marginLeft: 2, backgroundColor: '#FFFFFF', width: 390, height: 700, borderRadius: 0 }}>
                <Image source={bca} style={{ width: 35, height: 35, marginLeft: 25, marginTop: 20 }} />
                <Image source={garis} style={{ width: 800, height: 1, marginLeft: -205, marginTop: 20 }} />
                <Image source={mandiri} style={{ width: 40, height: 20, marginLeft: 25, marginTop: 20 }} />
                <Text style={{ fontSize: 13, marginTop: -24, fontWeight: '400', marginLeft: 80, color: '#4F4F4F' }}>Bank Mandiri</Text>
                <Image source={garis} style={{ width: 800, height: 1, marginLeft: -205, marginTop: 35 }} />

            </View>
        </View>
    );
};


export default MetodeTopUp;