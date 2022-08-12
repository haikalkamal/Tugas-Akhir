import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import profile from '../profile.jpg';
import garis from '../garis.png';
import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

const LanggananPetugas = () => {

    const navigation = useNavigation();

    const onMenentukanJadwalPress = () => {
        navigation.navigate('MenentukanJadwal');
    };
    const onTabsPetugasPress = () => {
        navigation.navigate('TabsPetugas');
    };

return (
    <View>
        <Component1 />
        <Component2 />
        <CustomButton
          text="Ubah Jadwal"
          onPress={onMenentukanJadwalPress}
          bgColor="transparent"
          fontWeight="400"
          fgColor="#FFFFFF"
          marginTop={-124}
          marginLeft={115}
          fontSize={12}
        />
        <CustomButton
          text="Kembali"
          onPress={onTabsPetugasPress}
          bgColor="transparent"
          fontWeight="400"
          fgColor="#4F4F4F"
          marginTop={-184}
          marginLeft={-115}
          fontSize={12}
        />
    </View>
    );
};

const Component1 = () => {
    return (
        <View>
            <Text style={{ fontSize: 15, marginTop: 25, fontWeight: '400', marginLeft: 25, color: '#000000', }}>Detail pengguna yang berlangganan</Text>
        </View>
    );
};

const Component2 = () => {
    return ( 
        <View>
        <View style={{ marginTop: 20, marginLeft: 2, width: 390, height: 720, backgroundColor:"#FFFFFF", borderRadius: 15, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, }}>
            <View style={{ marginTop: 25, marginLeft: 30, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#C4C4C4', width: 325, height: 415, borderRadius: 14 }}>
            <Text style={{ fontSize: 12, marginLeft: 25, marginTop: 15, fontWeight: '540000', textAlign: 'left', color: '#000000', }}>Ganda Pradana K</Text>
                <Text style={{ fontSize: 12, marginLeft: 25, marginTop: 8, fontWeight: '540000', textAlign: 'left', color: '#000000', }}>0898 - 8989 - 8989</Text>
                <Image source={garis} style={{ width: 550, height: 1, marginLeft: -115, marginTop: 10 }} />

                <Text style={{ fontSize: 12, marginLeft: 25, marginTop: 8, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Jenis sampah yang diterima :</Text>
                <Text style={{ fontSize: 11, marginLeft: 40, marginTop: 5, fontWeight: '400', textAlign: 'left', color: '#000000', }}>- Kertas</Text>
                <Text style={{ fontSize: 11, marginLeft: 40, marginTop: 5, fontWeight: '400', textAlign: 'left', color: '#000000', }}>- Kardus</Text>
                <Text style={{ fontSize: 11, marginLeft: 40, marginTop: 5, fontWeight: '400', textAlign: 'left', color: '#000000', }}>- Botol</Text>
                <Text style={{ fontSize: 11, marginLeft: 40, marginTop: 5, fontWeight: '400', textAlign: 'left', color: '#000000', }}>- Elektronik</Text>
                <Image source={garis} style={{ width: 550, height: 1, marginLeft: -115, marginTop: 10 }} />

                <Text style={{ fontSize: 12, marginLeft: 25, marginTop: 10, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Anda akan berlangganan pada :</Text>
                <Text style={{ fontSize: 11, marginLeft: 40, marginTop: 5, fontWeight: '400', textAlign: 'left', color: '#000000', }}>1 September 2022 - 1 Oktober 2022</Text>
                <Image source={garis} style={{ width: 550, height: 1, marginLeft: -115, marginTop: 10 }} />

                <Text style={{ fontSize: 12, marginLeft: 25, marginTop: 10, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Jadwal Pengambilan</Text>
                <Text style={{ fontSize: 11, marginLeft: 40, marginTop: 5, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Senin dan Kamis</Text>
                <Image source={garis} style={{ width: 550, height: 1, marginLeft: -115, marginTop: 10 }} />

                <Text style={{ fontSize: 12, marginLeft: 25, marginTop: 10, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Waktu Pengambilan (Waktu Indonesia Barat)</Text>
                <Text style={{ fontSize: 11, marginLeft: 40, marginTop: 5, fontWeight: '400', textAlign: 'left', color: '#000000', }}>07.00  - 10.00</Text>
                <Image source={garis} style={{ width: 550, height: 1, marginLeft: -115, marginTop: 10 }} />

                <Text style={{ fontSize: 12, marginLeft: 25, marginTop: 10, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Biaya Langganan</Text>
                <Text style={{ fontSize: 11, marginLeft: 40, marginTop: 5, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Rp.50.000 </Text>
                <View style={{marginLeft: 170, marginRight: 15, marginTop: 192, backgroundColor: '#2ECC71', borderRadius: 5, height: 33, width: 100}}>
                <View style={{marginLeft: -115, marginRight: 15, marginTop: 1, backgroundColor: '#ffffff', borderRadius: 5, borderWidth: 1, borderColor: '#C4C4C4', height: 33, width: 100}}>
            </View>
            </View>
        </View>
        </View>
    </View>
    );
  };


export default LanggananPetugas;