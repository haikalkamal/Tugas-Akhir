import React from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import back from '../back.png';
import fotomamang from '../fotomamang.png';
import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';


const Call = () => {

  const navigation = useNavigation();

  const onStatusCallPress = () => {
  navigation.navigate('StatusCall');

  };

    return(
        <View>
        <Component1 />
        <Component2 />
        <CustomButton
        text="Mahmad Aliyudin Sapamas"
        onPress={onStatusCallPress}
        fontWeight="400"
        fgColor="#4F4F4F"
        bgColor="transparent"
        marginTop={-778}
        fontSize={11}
        marginLeft={-155}
      />
    </View>
    );
}

const Component1 = () => {
    return ( 
    <View>
       
        <Text style={{fontSize: 14, marginTop: 15, fontWeight: 'bold', textAlign: 'center', color: '#4F4F4F',}}>Memanggil Petugas</Text>
        <Image source={back} style={{width: 13, height: 13, marginLeft: 20, marginTop: -15,}} />
        <View style={{marginTop: 8, marginLeft: 2, backgroundColor: '#80D484', width: 390, height: 36, borderRadius: 5}}>
        <Text style={{fontSize: 11, marginTop: 10, fontWeight: '400', textAlign: 'center', color: '#FFFFFF',}}>To : Jln. Rasim 8 Rt.0**/0**. Simprug. Kebayoran Lama. Jalan Mawar</Text>
       
      </View>
      </View>
    );
  };

  const Component2 = () => {
    return ( 
    <View>
        <View style={{marginTop: 1, marginLeft: 2, backgroundColor: '#FFFFFF', width: 390, height: 800, borderRadius: 0}}>
        <Text style={{fontSize: 12, marginLeft: 30, marginTop: 15, fontWeight: '500', textAlign: 'left', color: '#4F4F4F',}}>Siapa yang mau kamu panggil :</Text>
        <View style={{marginTop: 10, marginLeft: 25, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#C4C4C4', width: 335, height: 80, borderRadius: 14}}>
        <Text style={{fontSize: 11, marginLeft: 270, marginTop: 10, fontWeight: '400', color: '#4F4F4F',}}>500 m</Text>
        <Text style={{fontSize: 11, marginLeft: 270, marginTop: 5, fontWeight: '400', color: '#4F4F4F',}}>3 min</Text>
        <Text style={{fontSize: 11, marginLeft: 270, marginTop: 5, fontWeight: '400', color: '#4F4F4F',}}>Rp 10.000</Text>
        <Text style={{fontSize: 11, marginLeft: 22, marginTop: -30, fontWeight: '540000', textAlign: 'left', color: '#4F4F4F',}}>0898 - 8989 - 8989</Text>

        <View style={{marginTop: 45, marginLeft: -1, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#C4C4C4', width: 335, height: 80, borderRadius: 14}}>
        <Text style={{fontSize: 11, marginLeft: 23, marginTop: 10, fontWeight: '400', textAlign: 'left', color: '#4F4F4F',}}>Dadang Saputra</Text>
        <Text style={{fontSize: 11, marginLeft: 270, marginTop: -12, fontWeight: '400', color: '#4F4F4F',}}>500 m</Text>
        <Text style={{fontSize: 11, marginLeft: 270, marginTop: 5, fontWeight: '400', color: '#4F4F4F',}}>3 min</Text>
        <Text style={{fontSize: 11, marginLeft: 270, marginTop: 5, fontWeight: '400', color: '#4F4F4F',}}>Rp 10.000</Text>
        <Text style={{fontSize: 11, marginLeft: 22, marginTop: -35, fontWeight: '540000', textAlign: 'left', color: '#4F4F4F',}}>0898 - 8989 - 8989</Text>
      
      </View>       
      </View>
      </View>
      </View>
    );
  };

  
export default Call;