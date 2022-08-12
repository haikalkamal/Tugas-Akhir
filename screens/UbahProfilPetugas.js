import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import profile from '../profile.jpg';
import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

const UbahProfilPetugas = () => {
    const [nama, setNama] = useState('');
    const [alamat, setAlamat] = useState('');
    const [provinsi, setProvinsi] = useState('');
    const [kecamatan, setKecamatan] = useState('');
    const [kota, setKota] = useState('');
    const [pos, setPos] = useState('');
    const [email, setEmail] = useState('');
    const [telp, setTelp] = useState('');
    const [plat, setPlat] = useState('');

    const navigation = useNavigation();

    const onKelolaProfilPetugasPress = () => {
        navigation.navigate('KelolaProfilPetugas');
    };

    return (
        <View style={styles.root}>
            <Component1 />
            <CustomInput
                placeholder="Nama"
                value={nama}
                setValue={setNama}
            />
            <CustomInput
                placeholder="Alamat"
                value={alamat}
                setValue={setAlamat}
            />
            <CustomInput
                placeholder="Provinsi"
                value={provinsi}
                setValue={setProvinsi}
            />
            <CustomInput
                placeholder="Kecamatan"
                value={kecamatan}
                setValue={setKecamatan}
            />
            <CustomInput
                placeholder="Kota"
                value={kota}
                setValue={setKota}
            />
            <CustomInput
                placeholder="Kode Pos"
                value={pos}
                setValue={setPos}
            />
             <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
            />
             <CustomInput
                placeholder="No Telp"
                value={telp}
                setValue={setTelp}
            />
            <CustomInput
                placeholder="No Plat"
                value={plat}
                setValue={setPlat}

            />
            <Component2 />
            <CustomButton
                text="Simpan"
                onPress={onKelolaProfilPetugasPress}
                bgColor="transparent"
                fontWeight='400'
                marginTop={-56}
                fgColor="#FFFFFF"
            />

        </View>
    );
};

const Component1 = () => {
    return (
        <View>
            <Text style={{ fontSize: 15, marginTop: 25, fontWeight: '400', marginLeft: 80, color: '#4F4F4F', }}>Masukkan Data Anda</Text>
        </View>
    );
};
const Component2 = () => {
    return (
        <View>
            <View style={{ marginLeft: 105, marginRight: 15, marginTop: 20, backgroundColor: '#2ECC71', borderRadius: 5, height: 33, width: 100 }}>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignitems: 'center',
        padding: 40,
        marginVertical: 1,
    }
});

export default UbahProfilPetugas;