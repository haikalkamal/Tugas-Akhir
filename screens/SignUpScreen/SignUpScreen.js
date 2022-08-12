import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';


const SignUpScreen = () => {

    const [nama, setNama] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const {isLoading, SignUp} = useContext(AuthContext);

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        navigation.navigate('Tabs');
    };
    const onLoginPressed = () => {
        navigation.navigate('TabsPetugas');
    };
    const onSignInPress = () => {
        navigation.navigate('Masuk');

    };
    const {register} = useContext(AuthContext);
    return (
        <View style={styles.root}>
            <Text style={styles.title}>Buat akun</Text>
            <CustomInput
                placeholder="Nama"
                value={nama}
                setValue={setNama}
            />
            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
            />
            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry
            />
            <Component1 />
            <CustomButton
                text="User"
                //  onPress={onRegisterPressed}
                fontWeight="300"
                bgColor="transparent"
                fgColor="#2ECC71"
                marginTop={-254}
                marginLeft={-110}
                onPress={() =>{
                    register(nama,email,password);
                    navigation.navigate('Tabs');
                }}
            />
            <CustomButton
                text="Petugas"
                //  onPress={onLoginPressed}
                fontWeight="300"
                bgColor="transparent"
                fgColor="#2ECC71"
                marginTop={-314}
                marginLeft={120}
                onPress={() =>{
                    register(nama,email,password);
                    navigation.navigate('TabsPetugas');
                }}
            />
            <CustomButton
                text="Sudah punya akun? Masuk disini"
                onPress={onSignInPress}
                bgColor="transparent"
                fontWeight='300'
                marginTop={-120}
                fgColor="#2ECC71"
            />
        </View>
    );
};

const Component1 = () => {
    return (
        <View>
            <View style={{ marginLeft: 65, marginTop: -230, backgroundColor: '#FFFFFF', borderRadius: 5, borderWidth: 1, borderColor: '#E5DEDE', height: 33, width: 110 }}>
                <View style={{ marginLeft: 115, marginTop: -1, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E5DEDE', borderRadius: 5, height: 33, width: 110 }}>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2ECC71',
        margin: 10,
        marginLeft: 120,
        marginTop: -10,
        marginBottom: 60,
    },
    root: {
        alignitems: 'center',
        padding: 20,
        marginTop: 90,
    },

});
export default SignUpScreen;