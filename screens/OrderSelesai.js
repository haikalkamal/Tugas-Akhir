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

const OrderSelesai = () => {

    const navigation = useNavigation();

    const onTabsPress = () => {
        navigation.navigate('Tabs');
    };

    return (
        <View>
            <Component1 />
            <Component2 />
            <Component3 />
            <CustomButton
                text="Selesai"
                onPress={onTabsPress}
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
                    <Image source={kardus} style={{ width: 30, height: 30, marginLeft: 15, marginTop: 15 }} />
                    <Text style={{ fontSize: 11, marginLeft: 60, marginTop: -30, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Kardus</Text>
                    <Text style={{ fontSize: 10, marginLeft: 60, marginTop: 3, fontWeight: '300', textAlign: 'left', color: '#000000', }}>Rp 1500/kg</Text>
                    <Text style={{ fontSize: 10, marginLeft: 60, marginTop: 3, fontWeight: '300', textAlign: 'left', color: '#000000', }}>2 kg</Text>

                    <View style={{ marginTop: 30, marginLeft: -3, backgroundColor: '#FFFFFF', width: 325, height: 80, borderWidth: 1, borderColor: '#C4C4C4', borderRadius: 14 }}>
                        <Image source={koran} style={{ width: 30, height: 30, marginLeft: 15, marginTop: 15 }} />
                        <Text style={{ fontSize: 11, marginLeft: 60, marginTop: -30, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Koran</Text>
                        <Text style={{ fontSize: 10, marginLeft: 60, marginTop: 3, fontWeight: '300', textAlign: 'left', color: '#000000', }}>Rp 1000/kg</Text>
                        <Text style={{ fontSize: 10, marginLeft: 60, marginTop: 3, fontWeight: '300', textAlign: 'left', color: '#000000', }}>1 kg</Text>

                        <View style={{ marginTop: 30, marginLeft: -2, backgroundColor: '#FFFFFF', width: 325, height: 80, borderWidth: 1, borderColor: '#C4C4C4', borderRadius: 14 }}>
                            <Image source={botol} style={{ width: 30, height: 30, marginLeft: 15, marginTop: 15 }} />
                            <Text style={{ fontSize: 11, marginLeft: 60, marginTop: -30, fontWeight: '400', textAlign: 'left', color: '#000000', }}>Botol</Text>
                            <Text style={{ fontSize: 10, marginLeft: 60, marginTop: 3, fontWeight: '300', textAlign: 'left', color: '#000000', }}>Rp 2000/kg</Text>
                            <Text style={{ fontSize: 10, marginLeft: 60, marginTop: 3, fontWeight: '300', textAlign: 'left', color: '#000000', }}>4 kg</Text>
                            <Text style={{ fontSize: 13, marginTop: 35, fontWeight: '400', marginLeft: -1, color: '#000000', }}>Jumlah</Text>
                            <Image source={garis} style={{ width: 660, height: 1, marginLeft: -170, marginTop: 5 }} />
                            <Text style={{ fontSize: 13, marginTop: 35, fontWeight: '300', marginLeft: -1, color: '#000000', }}>Kardus</Text>
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
            <View style={{ marginLeft: 145, marginTop: -110, backgroundColor: '#2ECC71', borderRadius: 5, borderWidth: 1, borderColor: '#2ECC71', height: 33, width: 100 }}>
            </View>
        </View>
    );
};


export default OrderSelesai;
