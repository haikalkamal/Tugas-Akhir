 import React, {useContext, useState} from 'react';
 import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
 import CustomInput from '../CustomInput/CustomInput';
 import CustomButton from '../CustomButton/CustomButton';
 import { useNavigation } from '@react-navigation/native';
 import { AuthContext } from '../context/AuthContext';
    
 const SignInScreen = () => {
    const [email, setEmail] = useState('joker@mail.com');
    const [password, setPassword] = useState('joker123');
    const {isLoading, SignIn} = useContext(AuthContext);

    const {height} = useWindowDimensions();

    const navigation = useNavigation();
    const onSignInPressed = () => {
        navigation.navigate('Tabs');  
    };
    const onLoginPressed = () => {
        navigation.navigate('TabsPetugas');  
       };
    const onSignUpPress = () => {
        navigation.navigate('Register');
    };
    const {login} = useContext(AuthContext);
    return(
         <View style={styles.root}>
           <Text style={styles.title}>Masuk akun </Text> 
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
                fontWeight="300"
                fgColor="#2ECC71"
                bgColor="transparent"
                marginTop={-190}
                marginLeft={-110}
                onPress={() =>{
                    login(email,password);
                    navigation.navigate('Tabs');
                }}
            />
            <CustomButton 
                text="Petugas" 
                fontWeight="300"
                fgColor="#2ECC71"
                bgColor="transparent"
                marginTop={-250}
                marginLeft={120}
                onPress={() =>{
                    login(email,password);
                    navigation.navigate('TabsPetugas');
                }}
            />
            <CustomButton
                text="Belum punya akun? Buat akun disini"
                onPress={onSignUpPress}
                bgColor="transparent"
                fontWeight= '300' 
                marginTop={-120}
                fgColor="#2ECC71"
            />
        </View>
    );
};
const Component1 = () => {
    return (
      <View>
            <View style={{marginLeft:65, marginTop: -165, backgroundColor: '#FFFFFF', borderRadius: 5, borderWidth: 1, borderColor: '#E5DEDE',height: 33, width: 110}}>
            <View style={{marginLeft: 115, marginTop: -1, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E5DEDE', borderRadius: 5, height: 33, width: 110}}>
          </View>    
        </View>
      </View>
    );
  };
const styles = StyleSheet.create({
    root: {
        alignitems: 'center',
        padding: 20,
        marginVertical: 90,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2ECC71',
        margin: 10,
        marginLeft: 115,
        marginTop: 50,
        marginBottom: 60,
       },
});
export default SignInScreen;