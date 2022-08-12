import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import fotomamang from '../fotomamang.png';
import garis from '../garis.png';
import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

const StopLangganan = () => {

    const navigation = useNavigation();

    const onBerlanggananPress = () => {
        navigation.navigate('BerlanggananUser');
    };
    const onTabsPress = () => {
        navigation.navigate('Tabs');
    };
    const onLanggananPress = () => {
        navigation.navigate('LanggananUser');
    };
return (
    <View>
        <Component1 />
        <Component2 />
        <Component3 />

        <CustomButton
          text="Mahmad Alliyudin Saspamas"
          onPress={onBerlanggananPress}
          bgColor="transparent"
          fontWeight="400"
          fgColor="#000000"
          marginTop={-715}
          marginLeft={-120}
          fontSize={12}
        />
        <CustomButton
                    text="Berhenti"
                    onPress={onLanggananPress}
                    bgColor="#transparent"
                    fontWeight="500"
                    fgColor="#FFFFFF"
                    marginTop={-339}
                    marginLeft={117}
                    fontSize={13}
                />
                <CustomButton
                    text="Kembali"
                    onPress={onTabsPress}
                    bgColor="transparent"
                    fontWeight="400"
                    fgColor="#4F4F4F"
                    marginTop={-399}
                    marginLeft={-100}
                    fontSize={13}
                />
    </View>
    );
};

const Component1 = () => {
    return (
        <View>
            <Text style={{ fontSize: 15, marginTop: 25, fontWeight: '400', marginLeft: 25, color: '#000000', }}>Anda sedang berlangganan dengan :</Text>
        </View>
    );
};

const Component2 = () => {
    return (
        <View>
            <View style={{ marginTop: 20, marginLeft: 2, width: 390, height: 720, backgroundColor:"#FFFFFF", borderRadius: 15, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, }}>
                <View style={{ marginTop: 25, marginLeft: 30, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#C4C4C4', width: 325, height: 415, borderRadius: 14 }}>
                   
                    <Text style={{ fontSize: 12, marginLeft: 60, marginTop: -30, fontWeight: '400', textAlign: 'left', color: '#000000', }}></Text>
                    <Text style={{ fontSize: 12, marginLeft: 25, marginTop: 45, fontWeight: '540000', textAlign: 'left', color: '#000000', }}>0898 - 8989 - 8989</Text>
                    <Image source={garis} style={{ width: 550, height: 1, marginLeft: -115, marginTop: 10 }} />

                    <Text style={{ fontSize: 12, marginLeft: 25, marginTop: 10, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Jenis sampah yang diterima :</Text>
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
                </View>
            </View>
        </View>
    );
};

const Component3 = () => {
    return (
      <View>
            <View style={{marginLeft:95, marginTop: -255, backgroundColor: '#FFFFFF', borderRadius: 5, borderWidth: 1, borderColor: '#E5DEDE',height: 33, width: 100}}>
            <View style={{marginLeft: 110, marginTop: -1, backgroundColor: '#2ECC71', borderWidth: 1, borderColor: '#2ECC71', borderRadius: 5, height: 33, width: 100}}>
          </View>    
        </View>
      </View>
    );
  };
export default StopLangganan;