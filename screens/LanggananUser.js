import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import fotomamang from '../fotomamang.png';
import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

const LanggananUser = () => {

    const navigation = useNavigation();

    const onBerlanggananPress = () => {
        navigation.navigate('BerlanggananUser');
    };
    const onTabsPress = () => {
        navigation.navigate('Tabs');
    };

    return (
        <View>
            <Component1 />
            <Component2 />

            <CustomButton
                text="Mahmad Alliyudin Saspamas"
                onPress={onBerlanggananPress}
                bgColor="transparent"
                fontWeight="400"
                fgColor="#000000"
                marginTop={-694}
                marginLeft={-130}
                fontSize={12}
            />
            <Component3 />
            <CustomButton
                text="Kembali"
                onPress={onTabsPress}
                bgColor="transparent"
                fontWeight="400"
                fgColor="#ffffff"
                marginTop={-155}
                marginLeft={5}
                fontSize={13}
            />

        </View>
    );
};

const Component1 = () => {
    return (
        <View>
            <Text style={{ fontSize: 15, marginTop: 25, fontWeight: '400', marginLeft: 25, color: '#000000', }}>Pilih petugas untuk berlangganan</Text>
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

                    <View style={{ marginTop: 45, marginLeft: -1, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#C4C4C4', width: 325, height: 75, borderRadius: 14 }}>
                        
                        <Text style={{ fontSize: 12, marginLeft: 20, marginTop: 15, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Dadang Saputra</Text>
                        <Text style={{ fontSize: 11, marginLeft: 270, marginTop: -13, fontWeight: '400', color: '#000000', }}>600 m</Text>
                        <Text style={{ fontSize: 11, marginLeft: 270, marginTop: 5, fontWeight: '400', color: '#000000', }}>4 min</Text>
                        <Text style={{ fontSize: 12, marginLeft: 20, marginTop: -17, fontWeight: '540000', textAlign: 'left', color: '#000000', }}>0898 - 8989 - 8989</Text>

                        <View style={{ marginTop: 45, marginLeft: -1, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#C4C4C4', width: 325, height: 75, borderRadius: 14 }}>
                           
                            <Text style={{ fontSize: 12, marginLeft: 20, marginTop: 15, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Ari Supratman</Text>
                            <Text style={{ fontSize: 11, marginLeft: 270, marginTop: -13, fontWeight: '400', color: '#000000', }}>700 m</Text>
                            <Text style={{ fontSize: 11, marginLeft: 270, marginTop: 5, fontWeight: '400', color: '#000000', }}>5 min</Text>
                            <Text style={{ fontSize: 12, marginLeft: 20, marginTop: -17, fontWeight: '540000', textAlign: 'left', color: '#000000', }}>0898 - 8989 - 8989</Text>

                            <View style={{ marginTop: 45, marginLeft: -1, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#C4C4C4', width: 325, height: 75, borderRadius: 14 }}>
                               
                                <Text style={{ fontSize: 12, marginLeft: 20, marginTop: 15, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Yayan Irawan</Text>
                                <Text style={{ fontSize: 11, marginLeft: 270, marginTop: -13, fontWeight: '400', color: '#000000', }}>800 m</Text>
                                <Text style={{ fontSize: 11, marginLeft: 270, marginTop: 5, fontWeight: '400', color: '#000000', }}>6 min</Text>
                                <Text style={{ fontSize: 12, marginLeft: 20, marginTop: -17, fontWeight: '540000', textAlign: 'left', color: '#000000', }}>0898 - 8989 - 8989</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};
const Component3 = () => {
    return (
        <View>
            <View style={{marginLeft:100, marginTop: -135, backgroundColor: '#2ECC71', borderRadius: 5, borderWidth: 1, borderColor: '#E5DEDE',height: 40, width: 200}}>
            </View>
        </View>
    );
};

export default LanggananUser;