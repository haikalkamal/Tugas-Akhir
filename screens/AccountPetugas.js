import React from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import profile from '../profile.jpg';
import notifikasi from '../notifikasi.png';
import rating from '../rating.png';
import logout from '../logout.png';
import faq from '../faq.png';
import about from '../about.png';
import fotomamang from '../fotomamang.png';
import next from '../next.png';
import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';
import SignInScreen from './SignInScreen/SignInScreen';
import { useNavigation } from '@react-navigation/native';


const AccountPetugas = () => {

  const navigation = useNavigation();

  const onLoginPress = () => {
  navigation.navigate('Masuk');
  };
  const onTrashSettingPress = () => {
    navigation.navigate('TrashSetting');
  };
  const onKelolaProfilPetugasPress = () => {
      navigation.navigate('KelolaProfilPetugas');
  };

  return (
    <View>
      <Component2 />
      <CustomButton
        text="Trash Setting"
        onPress={onTrashSettingPress}
        bgColor="transparent"
        fontWeight="400"
        fontSize={14}
        fgColor="#4F4F4F"
        marginLeft={-229}
        marginTop={-178}
      />
      <CustomButton
        text="Profile Setting"
        onPress={onKelolaProfilPetugasPress}
        bgColor="transparent"
        fontWeight="400"
        fontSize={14}
        fgColor="#4F4F4F"
        marginLeft={-222}
        marginTop={-166}
      />
      <Component3 />
      <CustomButton
        text="Keluar"
        onPress={onLoginPress}
        bgColor="transparent"
        fontWeight="500"
        fgColor="#FFFFFF"
        marginTop={225}
      />
      
    </View>
  );
}


const Component2 = () => {
  return (
    <View>
      <View style={{ marginTop: 40, marginLeft: 25, backgroundColor: '#FFFFFF', width: 340, borderWidth: 1, borderColor: '#C4C4C4', height: 165, borderRadius: 15 }}>
        <Text style={{ fontSize: 10, marginTop: -20, fontWeight: '300', marginLeft: 2, color: '#4F4F4F', }}>APP SETINGS</Text>
        <Image source={next} style={{ width: 13, height: 13, marginLeft: 305, marginTop: 25, }} />
        <Text style={{ fontSize: 14, marginTop: 20, fontWeight: '400', marginLeft: 15, color: '#4F4F4F', }}>Notification Setting</Text>
        <Image source={next} style={{ width: 13, height: 13, marginLeft: 305, marginTop: -15, }} />
        <Text style={{ fontSize: 14, marginTop: 20, fontWeight: '400', marginLeft: 15, color: '#4F4F4F', }}></Text>
        <Image source={next} style={{ width: 13, height: 13, marginLeft: 305, marginTop: -15, }} />
        <Text style={{ fontSize: 14, marginTop: 20, fontWeight: '400', marginLeft: 15, color: '#4F4F4F', }}>Security Setting</Text>
        <Image source={next} style={{ width: 13, height: 13, marginLeft: 305, marginTop: -15, }} />
      </View>
    </View>
  );
};

const Component3 = () => {
  return (
    <View>
      <View style={{ marginTop: -85, marginLeft: 25, backgroundColor: '#FFFFFF', width: 340, borderWidth: 1, borderColor: '#C4C4C4', height: 130, borderRadius: 15 }}>
        <Text style={{ fontSize: 10, marginTop: -20, fontWeight: '300', marginLeft: 2, color: '#4F4F4F', }}>GENERAL INFO</Text>
        <Text style={{ fontSize: 14, marginTop: 20, fontWeight: '400', marginLeft: 15, color: '#4F4F4F', }}>Term & Condition</Text>
        <Image source={next} style={{ width: 13, height: 13, marginLeft: 305, marginTop: -15, }} />
        <Text style={{ fontSize: 14, marginTop: 20, fontWeight: '400', marginLeft: 15, color: '#4F4F4F', }}>FAQ</Text>
        <Image source={next} style={{ width: 13, height: 13, marginLeft: 305, marginTop: -15 }} />
        <Text style={{ fontSize: 14, marginTop: 20, fontWeight: '400', marginLeft: 15, color: '#4F4F4F', }}>About Us</Text>
        <Image source={next} style={{ width: 13, height: 13, marginLeft: 305, marginTop: -15 }} />
        <View style={{marginLeft: 70, marginTop:270, backgroundColor: '#80D484', borderRadius: 5, height: 40, width: 200}}>
      </View>
      </View>
    </View>
  );
};

export default AccountPetugas;