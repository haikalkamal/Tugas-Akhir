import React from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import fotomamang from '../fotomamang.png';
import kardus from '../kardus.png';
import koran from '../koran.png';
import botol from '../botol.png';

import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

const HargaSampah = () => {

    const navigation = useNavigation();

    const onTabsPetugasPress = () => {
        navigation.navigate('TabsPetugas');
        };
        
    return (
        <View>
            <Component1 />
            <Component2 />
            <CustomButton
                text="Selesai"
                onPress={onTabsPetugasPress}
                bgColor="#transparent"
                fontWeight="400"
                fgColor="#FFFFFF"
                marginTop={-434}
                marginLeft={1}
                fontSize={13}
            />
        </View>
    );
};

const Component1 = () => {
    return (
        <View>
            <View style={{ marginTop: 0, marginLeft: 2, backgroundColor: '#FFFFFF', width: 390, height: 800, borderRadius: 1 }}>
                <Text style={{ fontSize: 14, marginTop: 25, fontWeight: '500', marginLeft: 30, color: '#000000', }}> Data Sampah</Text>
                <View style={{ marginTop: 25, marginLeft: 33, backgroundColor: '#FFFFFF', width: 325, height: 80, borderWidth: 1, borderColor: '#C4C4C4', borderRadius: 14 }}>
                    
                    <Text style={{ fontSize: 11, marginLeft: 20, marginTop: 15, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Kardus</Text>
                    <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, fontWeight: '300', textAlign: 'left', color: '#000000', }}>Rp 1500/g</Text>
                    <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, fontWeight: '300', textAlign: 'left', color: '#000000', }}>2 kg</Text>

                    <View style={{ marginTop: 30, marginLeft: -3, backgroundColor: '#FFFFFF', width: 325, height: 80, borderWidth: 1, borderColor: '#C4C4C4', borderRadius: 14 }}>
                        
                        <Text style={{ fontSize: 11, marginLeft: 20, marginTop: 15, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Koran</Text>
                        <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, fontWeight: '300', textAlign: 'left', color: '#000000', }}>Rp 1000/g</Text>
                        <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, fontWeight: '300', textAlign: 'left', color: '#000000', }}>1 kg</Text>

                        <View style={{ marginTop: 30, marginLeft: -2, backgroundColor: '#FFFFFF', width: 325, height: 80, borderWidth: 1, borderColor: '#C4C4C4', borderRadius: 14 }}>
                           
                            <Text style={{ fontSize: 11, marginLeft: 20, marginTop: 15, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Botol</Text>
                            <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, fontWeight: '300', textAlign: 'left', color: '#000000', }}>Rp 2000/g</Text>
                            <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, fontWeight: '300', textAlign: 'left', color: '#000000', }}>4 kg</Text>

                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const Component2 = () => {
    return (
      <View>
            <View style={{marginLeft:145, marginTop: -410, backgroundColor: '#2ECC71', borderRadius: 5, borderWidth: 1, borderColor: '#2ECC71',height: 33, width: 100}}>
        </View>
      </View>
    );
  };
export default HargaSampah;
