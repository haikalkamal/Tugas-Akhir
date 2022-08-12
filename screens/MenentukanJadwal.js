import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import profile from '../profile.jpg';
import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

const MenentukanJadwal = () => {
    const [nama, setNama] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const onLanggananPetugasPress = () => {
        navigation.navigate('LanggananPetugas');
    };

return (
    <View style={styles.root}>
        <Component1 />
        <CustomInput 
                placeholder="Jenis Sampah" 
                value={nama} 
                setValue={setNama}
            />
        <CustomInput 
                placeholder="Tanggal" 
                value={password} 
                setValue={setPassword}
            
            />
        <CustomInput 
                placeholder="Hari" 
                value={nama} 
                setValue={setNama}
            />
        <CustomInput 
                placeholder="Jam" 
                value={password} 
                setValue={setPassword}
              
            />
        <CustomInput 
                placeholder="Biaya" 
                value={password} 
                setValue={setPassword}
              
            />
        <Component2 />
        <CustomButton
                text="Simpan"
                onPress={onLanggananPetugasPress}
                bgColor="transparent"
                fontWeight= '400' 
                marginTop={-57}
                fgColor="#FFFFFF"
            />
        

            
    </View>
    );
};

const Component1 = () => {
    return (
        <View>
            <Text style={{ fontSize: 15, marginTop: 25, fontWeight: '400', marginLeft: 50, color: '#4F4F4F', }}>Masukkan jadwal penjemputan</Text>
        </View>
    );
};
const Component2 = () => {
    return (
        <View>
            <View style={{marginLeft: 105, marginRight: 15, marginTop: 20, backgroundColor: '#2ECC71', borderRadius: 8, height: 33, width: 100}}>
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

export default MenentukanJadwal;