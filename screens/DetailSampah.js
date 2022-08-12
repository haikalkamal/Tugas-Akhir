import React from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import fotomamang from '../fotomamang.png';
import kardus from '../kardus.png';
import koran from '../koran.png';
import botol from '../botol.png';
import garis from '../garis.png';
import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

const DetailSampah = () => {

    const navigation = useNavigation();

    const onIsiSaldoPress = () => {
        navigation.navigate('IsiSaldo');
    };

    return (
        <View>
            <Component1 />
            <Component2 />
            <Component3 />
            <CustomButton
                text="Konfirmasi"
                onPress={onIsiSaldoPress}
                bgColor="#transparent"
                fontWeight="400"
                fgColor="#FFFFFF"
                marginTop={-134}
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

                <View style={{ marginTop: 30, marginLeft: 33, backgroundColor: '#FFFFFF', width: 325, height: 80, borderWidth: 1, borderColor: '#C4C4C4', borderRadius: 14 }}>
                    
                    <Text style={{ fontSize: 11, marginLeft: 20, marginTop: 15, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Kardus</Text>
                    <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, fontWeight: '300', textAlign: 'left', color: '#000000', }}>Rp 1500/kg</Text>
                    <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, fontWeight: '300', textAlign: 'left', color: '#000000', }}>2 kg</Text>

                    <View style={{ marginTop: 30, marginLeft: -3, backgroundColor: '#FFFFFF', width: 325, height: 80, borderWidth: 1, borderColor: '#C4C4C4', borderRadius: 14 }}>
                    
                        <Text style={{ fontSize: 11, marginLeft: 20, marginTop: 15, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Koran</Text>
                        <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, fontWeight: '300', textAlign: 'left', color: '#000000', }}>Rp 1000/kg</Text>
                        <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, fontWeight: '300', textAlign: 'left', color: '#000000', }}>1 kg</Text>

                        <View style={{ marginTop: 30, marginLeft: -2, backgroundColor: '#FFFFFF', width: 325, height: 80, borderWidth: 1, borderColor: '#C4C4C4', borderRadius: 14 }}>
                            
                            <Text style={{ fontSize: 11, marginLeft: 20, marginTop: 15, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Botol</Text>
                            <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, fontWeight: '300', textAlign: 'left', color: '#000000', }}>Rp 2000/kg</Text>
                            <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, fontWeight: '300', textAlign: 'left', color: '#000000', }}>4 kg</Text>
                            <Text style={{ fontSize: 13, marginTop: 35, fontWeight: '400', marginLeft: -1, color: '#000000', }}>Jumlah</Text>
                            <Image source={garis} style={{ width: 660, height: 1, marginLeft: -170, marginTop: 5 }} />
                            <Text style={{ fontSize: 13, marginTop: 15, fontWeight: '300', marginLeft: -1, color: '#000000', }}>Kardus</Text>
                            <Text style={{ fontSize: 13, marginTop: -20, fontWeight: '300', marginLeft: 240, color: '#000000', }}>Rp 1.500 x 2</Text>
                            <Text style={{ fontSize: 13, marginTop: 20, fontWeight: '300', marginLeft: 240, color: '#000000', }}>Rp 1.000 x 2</Text>
                            <Text style={{ fontSize: 13, marginTop: 20, fontWeight: '300', marginLeft: 240, color: '#000000', }}>Rp 2.000 x 2</Text>
                            <Text style={{ fontSize: 13, marginTop: -57, fontWeight: '300', marginLeft: -1, color: '#000000', }}>Koran</Text>
                            <Text style={{ fontSize: 13, marginTop: 18, fontWeight: '300', marginLeft: -1, color: '#000000', }}>Botol</Text>
                            <Image source={garis} style={{ width: 660, height: 1, marginLeft: -170, marginTop: 15 }} />
                            <Text style={{ fontSize: 13, marginTop: 15, fontWeight: '400', marginLeft: -1, color: '#000000', }}>Total</Text>
                            <Text style={{ fontSize: 13, marginTop: -20, fontWeight: '300', marginLeft: 240, color: '#000000', }}>Rp 9.000</Text>

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

        </View>
    );
};
const Component3 = () => {
    return (
        <View>
            <View style={{ marginLeft: 95, marginTop: -115, backgroundColor: '#2ECC71', borderRadius: 5, borderWidth: 1, borderColor: '#2ECC71', height: 40, width: 200 }}>
            </View>
        </View>
    );
};


export default DetailSampah;
