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

const TrashSetting = () => {

    const navigation = useNavigation();

    const onUbahDataHargaSampahPress = () => {
        navigation.navigate('UbahDataHargaSampah');
        };
        const onTambahDataHargaSampahPress = () => {
            navigation.navigate('TambahDataHargaSampah');
            };
    const onTabsPetugasPressed = () => {
        navigation.navigate('TabsPetugas');  
        };
        

    return (
        <View>
            <Component1 />
            <Component2 />
            <CustomButton 
                text="Kembali" 
                onPress={onTabsPetugasPressed}
                fontWeight="400"
                fgColor="#4F4F4F"
                bgColor="transparent"
                marginTop={-453}
                marginLeft={-100}
                fontSize={13}
            />
            <CustomButton
                text="Tambah"
                onPress={onTambahDataHargaSampahPress}
                bgColor="#transparent"
                fontWeight="400"
                fgColor="#FFFFFF"
                marginTop={-513}
                marginLeft={120}
                fontSize={13}
            />
            <CustomButton
                text="Ubah"
                onPress={onUbahDataHargaSampahPress}
                bgColor="#transparent"
                fontWeight="400"
                fgColor="#ffffff"
                marginTop={-866}
                marginLeft={231}
                fontSize={12}
            />
        </View>
    );
};

const Component1 = () => {
    return (
        <View>
            <View style={{ marginTop: 0, marginLeft: 2, backgroundColor: '#FFFFFF', width: 390, height: 800, borderRadius: 1 }}>
                <Text style={{ fontSize: 14, marginTop: 25, fontWeight: '500', marginLeft: 20, color: '#000000', }}>Pengaturan Harga Sampah</Text>
                <View style={{ marginTop: 25, marginLeft: 33, backgroundColor: '#FFFFFF', width: 325, height: 80, borderWidth: 1, borderColor: '#C4C4C4', borderRadius: 14 }}>
                    
                    <Text style={{ fontSize: 11, marginLeft: 20, marginTop: 15, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Kardus</Text>
                    <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, fontWeight: '300', textAlign: 'left', color: '#000000', }}>Rp 1500/g</Text>

                    <View style={{ marginTop: 45, marginLeft: -3, backgroundColor: '#FFFFFF', width: 325, height: 80, borderWidth: 1, borderColor: '#C4C4C4', borderRadius: 14 }}>
                        
                        <Text style={{ fontSize: 11, marginLeft: 20, marginTop: 15, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Koran</Text>
                        <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, fontWeight: '300', textAlign: 'left', color: '#000000', }}>Rp 1000/g</Text>

                        <View style={{ marginTop: 47, marginLeft: -2, backgroundColor: '#FFFFFF', width: 325, height: 80, borderWidth: 1, borderColor: '#C4C4C4', borderRadius: 14 }}>
                            
                            <Text style={{ fontSize: 11, marginLeft: 20, marginTop: 15, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Botol</Text>
                            <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, fontWeight: '300', textAlign: 'left', color: '#000000', }}>Rp 2000/g</Text>

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
            <View style={{marginLeft:95, marginTop: -430, backgroundColor: '#FFFFFF', borderRadius: 5, borderWidth: 1, borderColor: '#E5DEDE',height: 33, width: 100}}>
            <View style={{marginLeft: 110, marginTop: -1, backgroundColor: '#2ECC71', borderWidth: 1, borderColor: '#2ECC71', borderRadius: 5, height: 33, width: 100}}>
            <View style={{marginLeft: 70, marginTop: -290, backgroundColor: '#2ECC71', borderWidth: 1, borderColor: '#2ECC71', borderRadius: 5, height: 23, width: 70}}>
          </View>
          </View>    
        </View>
      </View>
    );
  };
export default TrashSetting;
