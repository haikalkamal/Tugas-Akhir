import React, {useContext} from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import profile from '../profile.jpg';
import notifikasi from '../notifikasi.png';
import rating from '../rating.png';
import logout from '../logout.png';
import faq from '../faq.png';
import about from '../about.png';
import next from '../next.png';
import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';
import SignInScreen from './SignInScreen/SignInScreen';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from './context/AuthContext';

const Account = () => {

  const navigation = useNavigation();

  const onSignInPress = () => {
  navigation.navigate('Masuk');
  };
  const onStopLanggananPress = () => {
    navigation.navigate('StopLangganan');
  };
  const onKelolaProfilUserPress = () => {
    navigation.navigate('KelolaProfilUser');
  };
  const {logout} = useContext(AuthContext);
  return (
    <View>
      <Component2 />
      <CustomButton
        text="Customer Setting"
        onPress={onStopLanggananPress}
        bgColor="transparent"
        fontWeight="400"
        fontSize={14}
        marginTop={-65}
        marginLeft={-200}
        fgColor="#4F4F4F"
      />
      
      <Component3 />
      <CustomButton
        text="Profile Setting"
        onPress={onKelolaProfilUserPress}
        bgColor="transparent"
        fontWeight="400"
        fontSize={14}
        fgColor="#4F4F4F"
        marginLeft={-222}
        marginTop={-109}
      />
      <Component4 />

      <CustomButton
        text="Keluar"
        // onPress={onSignInPress}
        bgColor="transparent"
        fontWeight="500"
        marginTop={175}
        fgColor="#FFFFFF"
        onPress={() =>{
          logout();
          navigation.navigate('Masuk');
      }}
      />
    </View>
  );
}


const Component2 = () => {
  return (
    <View>
      <View style={{ marginTop: 40, marginLeft: 25, backgroundColor: '#FFFFFF', width: 340, borderWidth: 1, borderColor: '#C4C4C4', height: 50, borderRadius: 15 }}>
        <Text style={{ fontSize: 10, marginTop: -20, fontWeight: '300', marginLeft: 2, color: '#4F4F4F', }}>LANGGANAN</Text>
        <Text style={{ fontSize: 14, marginTop: 20, fontWeight: '400', marginLeft: 15, color: '#4F4F4F', }}></Text>
        <Image source={next} style={{ width: 13, height: 13, marginLeft: 305, marginTop: -15, }} />
        
      </View>
    </View>
  );
};

const Component3 = () => {
  return (
    <View>
      <View style={{ marginTop: -25, marginLeft: 25, backgroundColor: '#FFFFFF', width: 340, borderWidth: 1, borderColor: '#C4C4C4', height: 130, borderRadius: 15 }}>
        <Text style={{ fontSize: 10, marginTop: -20, fontWeight: '300', marginLeft: 2, color: '#4F4F4F', }}>APP SETINGS</Text>
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

const Component4 = () => {
  return (
    <View>
      <View style={{ marginTop: -25, marginLeft: 25, backgroundColor: '#FFFFFF', width: 340, borderWidth: 1, borderColor: '#C4C4C4', height: 130, borderRadius: 15 }}>
        <Text style={{ fontSize: 10, marginTop: -20, fontWeight: '300', marginLeft: 2, color: '#4F4F4F', }}>GENERAL INFO</Text>
        <Text style={{ fontSize: 14, marginTop: 20, fontWeight: '400', marginLeft: 15, color: '#4F4F4F', }}>Term & Condition</Text>
        <Image source={next} style={{ width: 13, height: 13, marginLeft: 305, marginTop: -15, }} />
        <Text style={{ fontSize: 14, marginTop: 20, fontWeight: '400', marginLeft: 15, color: '#4F4F4F', }}>FAQ</Text>
        <Image source={next} style={{ width: 13, height: 13, marginLeft: 305, marginTop: -15 }} />
        <Text style={{ fontSize: 14, marginTop: 20, fontWeight: '400', marginLeft: 15, color: '#4F4F4F', }}>About Us</Text>
        <Image source={next} style={{ width: 13, height: 13, marginLeft: 305, marginTop: -15 }} />
        <View style={{marginLeft: 70, marginTop:220, backgroundColor: '#80D484', borderRadius: 5, height: 40, width: 200}}>
      </View>
      </View>
    </View>
  );
};

export default Account;