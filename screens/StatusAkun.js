import React from 'react';
import {Text, View, Image, TextInput, StyleSheet,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';


const StatusAkun = () => {

    const navigation = useNavigation();

    const onStatusOffPress = () => {
      navigation.navigate('StatusOff');
    };
    const onTabsPetugasPress = () => {
      navigation.navigate('TabsPetugas');
    };

    return(
        <View>
        <Component1 />
        <Component2 />

        <CustomButton
          text="Off"
          onPress={onStatusOffPress}
          bgColor="transparent"
          fontWeight="500"
          fgColor="#80D484"
          marginTop={-435}
          marginLeft={-105}
          fontSize={15}
        />
        <CustomButton
          text="On"
          onPress={onTabsPetugasPress}
          bgColor="transparent"
          fontWeight="500"
          fgColor="#FFFFFF"
          marginTop={-495}
          marginLeft={115}
          fontSize={15}
        />
        </View>
        
        
    );
}

const Component1 = () => {
    return ( 
    <View>
        <View style={{marginTop: 0, marginLeft: 2, backgroundColor: '#FFFFFF', width: 390, height: 750, borderRadius: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0,}}>
        <Text style={{fontSize: 14, marginTop: 300, fontWeight: '300', marginLeft: 125, color: '#000000',}}>Ubah status akun anda</Text>
    </View>
    </View>
    );
  };
  const Component2 = () => {
    return (
      <View>
            <View style={{marginLeft:95, marginTop: -410, backgroundColor: '#FFFFFF', borderRadius: 5, borderWidth: 1, borderColor: '#E5DEDE',height: 33, width: 100}}>
            <View style={{marginLeft: 110, marginTop: -1, backgroundColor: '#2ECC71', borderWidth: 1, borderColor: '#2ECC71', borderRadius: 5, height: 33, width: 100}}>
          </View>    
        </View>
      </View>
    );
  };

export default StatusAkun;