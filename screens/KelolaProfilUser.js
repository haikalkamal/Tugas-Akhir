import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import profile from '../profile.jpg';
import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

const KelolaProfilUser = () => {
    const [nama, setNama] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const onUbahProfilUserPress = () => {
        navigation.navigate('UbahProfilUser');
    };
    const onTabsPress = () => {
        navigation.navigate('Tabs');
    };
return (
    <View style={styles.root}>
        <Component1 />
        <Component2 />
        <CustomButton
                text="Ubah"
                onPress={onUbahProfilUserPress}
                bgColor="transparent"
                fontWeight= '400' 
                marginTop={318}
                marginLeft={102}
                fontSize={13}
                fgColor="#FFFFFF"
            />
        <CustomButton
                text="Kembali"
                onPress={onTabsPress}
                bgColor="transparent"
                fontWeight= '400' 
                marginTop={-78}
                fontSize={13}
                marginLeft={-126}
                fgColor="#4F4F4F"
            />
        

            
    </View>
    );
};

const Component1 = () => {
    return (
        <View>
            <Text style={{ fontSize: 15, marginTop: 25, fontWeight: '400', marginLeft: 130, color: '#4F4F4F', }}>Profile</Text>
        </View>
    );
};
const Component2 = () => {
    return (
        <View>
            <View style={{marginLeft: 30, marginRight: 15, marginTop: 10, backgroundColor: '#FFFFFF', borderColor:'#C4C4C4', borderWidth: 1, borderRadius: 8, height: 35, width: 250}}>
            <Text style={{ fontSize: 13, marginTop: 7, fontWeight: '400', marginLeft: 15, color: '#4F4F4F', }}>Ganda Pradana K</Text>
            <View style={{marginLeft: -1, marginRight: 15, marginTop: 20, backgroundColor: '#FFFFFF', borderColor:'#C4C4C4', borderWidth: 1, borderRadius: 8, height: 35, width: 250}}>
            <Text style={{ fontSize: 13, marginTop: 7, fontWeight: '400', marginLeft: 15, color: '#4F4F4F', }}>Jalan Lapangan, RT 03/RW 13</Text>
            <View style={{marginLeft: -1, marginRight: 15, marginTop: 20, backgroundColor: '#FFFFFF', borderColor:'#C4C4C4', borderWidth: 1, borderRadius: 8, height: 35, width: 250}}>
            <Text style={{ fontSize: 13, marginTop: 7, fontWeight: '400', marginLeft: 15, color: '#4F4F4F', }}>Jawa Barat</Text>
            <View style={{marginLeft: -1, marginRight: 15, marginTop: 20, backgroundColor: '#FFFFFF', borderColor:'#C4C4C4', borderWidth: 1, borderRadius: 8, height: 35, width: 250}}>
            <Text style={{ fontSize: 13, marginTop: 7, fontWeight: '400', marginLeft: 15, color: '#4F4F4F', }}>Bekasi Barat</Text>
            <View style={{marginLeft: -1, marginRight: 15, marginTop: 20, backgroundColor: '#FFFFFF', borderColor:'#C4C4C4', borderWidth: 1, borderRadius: 8, height: 35, width: 250}}>
            <Text style={{ fontSize: 13, marginTop: 7, fontWeight: '400', marginLeft: 15, color: '#4F4F4F', }}>Kota Bekasi</Text>
            <View style={{marginLeft: -1, marginRight: 15, marginTop: 20, backgroundColor: '#FFFFFF', borderColor:'#C4C4C4', borderWidth: 1, borderRadius: 8, height: 35, width: 250}}>
            <Text style={{ fontSize: 13, marginTop: 7, fontWeight: '400', marginLeft: 15, color: '#4F4F4F', }}>17135</Text>
            <View style={{marginLeft: -1, marginRight: 15, marginTop: 20, backgroundColor: '#FFFFFF', borderColor:'#C4C4C4', borderWidth: 1, borderRadius: 8, height: 35, width: 250}}>
            <Text style={{ fontSize: 13, marginTop: 7, fontWeight: '400', marginLeft: 15, color: '#4F4F4F', }}>Ganda@mail.com</Text>
            <View style={{marginLeft: -1, marginRight: 15, marginTop: 20, backgroundColor: '#FFFFFF', borderColor:'#C4C4C4', borderWidth: 1, borderRadius: 8, height: 35, width: 250}}>
            <Text style={{ fontSize: 13, marginTop: 7, fontWeight: '400', marginLeft: 15, color: '#4F4F4F', }}>0898 - 8989 - 8989</Text>
            <View style={{marginLeft: 125, marginRight: 15, marginTop: 30, backgroundColor: '#2ECC71', borderColor:'#2ECC71', borderWidth: 1, borderRadius: 5, height: 33, width: 100}}>
            <View style={{marginLeft: -115, marginRight: 15, marginTop: -1, backgroundColor: '#FFFFFF', borderColor:'#E5DEDE', borderWidth: 1, borderRadius: 5, height: 33, width: 100}}>

        </View>
        </View>
        </View>
        </View>
        </View>
        </View>
        </View>
        </View>
        </View>
        </View>
        </View>
 
        
    );
};

  const styles = StyleSheet.create({
    root: {
        alignitems: 'center',
        padding: 40,
        marginVertical: 50,
    }
});

export default KelolaProfilUser;