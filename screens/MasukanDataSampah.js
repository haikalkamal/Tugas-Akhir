import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import profile from '../profile.jpg';
import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

const MasukanDataSampah = () => {
    const [nama, setNama] = useState('');
    const [harga, setHarga] = useState('');
    const [volume, setVolume] = useState('');

    const navigation = useNavigation();

    const onHargSampahPressed = () => {
        navigation.navigate('HargaSampah');
    };

return (
    <View style={styles.root}>
        <Component1 />
        <CustomInput 
                placeholder="Nama Sampah" 
                value={nama} 
                setValue={setNama}
            />
        <CustomInput 
                placeholder="Harga Sampah" 
                value={harga} 
                setValue={setHarga}
            
            />
        <CustomInput 
                placeholder="Volume Sampah" 
                value={volume} 
                setValue={setVolume}
            
            />
        <Component2 />
        <CustomButton
                text="Simpan"
                onPress={onHargSampahPressed}
                bgColor="transparent"
                fontWeight= '400' 
                marginTop={-56}
                fgColor="#FFFFFF"
            />
        

            
    </View>
    );
};

const Component1 = () => {
    return (
        <View>
            <Text style={{ fontSize: 15, marginTop: 25, fontWeight: '400', marginLeft: 75, color: '#4F4F4F', }}>Masukkan Data Sampah</Text>
        </View>
    );
};
const Component2 = () => {
    return (
        <View>
            <View style={{marginLeft: 105, marginRight: 15, marginTop: 20, backgroundColor: '#80D484', borderRadius: 8, height: 33, width: 100}}>
        </View>
        </View>
    );
};

  const styles = StyleSheet.create({
    root: {
        alignitems: 'center',
        padding: 40,
        marginVertical: 90,
    }
});

export default MasukanDataSampah;