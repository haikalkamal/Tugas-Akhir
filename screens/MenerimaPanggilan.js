import React from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import back from '../back.png';
import profile from '../profile.jpg';
import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';


const MenerimaPanggilan = () => {

  const navigation = useNavigation();

const onPanggilanMasukPressed = () => {
    navigation.navigate('PanggilanMasuk');  
};

const onStatusCallPress = () => {
  navigation.navigate('StatusCall');
};

    return(
        <View>
        <Component1 />
        <Component2 />
        <CustomButton
        text="Dadang Saputra"
        onPress={onStatusCallPress}
        fontWeight="400"
        fgColor="#4F4F4F"
        marginTop={-795}
        bgColor="transparent"
        fontSize={12}
        marginLeft={-200}
      />
      <CustomButton 
                text="Terima" 
                onPress={onPanggilanMasukPressed}
                fontWeight="400"
                fgColor="#FFFFFF"
                bgColor="transparent"
                marginTop={-759}
                marginLeft={15}
                fontSize={13}
            />
            
    </View>
    );
}

const Component1 = () => {
    return ( 
    <View>
       
        <Text style={{fontSize: 14, marginTop: 15, fontWeight: 'bold', textAlign: 'center', color: '#4F4F4F',}}>Panggilan Masuk</Text>
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
        <View style={{marginTop: 0, marginLeft: 2, backgroundColor: '#FFFFFF', width: 390, height: 800, borderRadius: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0,}}>
        <View style={{marginTop: 25, marginLeft: 31, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#C4C4C4', width: 325, height: 78, borderRadius: 14}}>
        <Text style={{fontSize: 11, marginLeft: 20, marginTop: 15, fontWeight: '400', textAlign: 'left', color: '#4F4F4F',}}></Text>
        <Text style={{fontSize: 11, marginLeft: 270, marginTop: -20, fontWeight: '400', color: '#4F4F4F',}}>700 m</Text>
        <Text style={{fontSize: 11, marginLeft: 270, marginTop: 4, fontWeight: '400', color: '#4F4F4F',}}>6 min</Text>
        <Text style={{fontSize: 11, marginLeft: 270, marginTop: 4, fontWeight: '400', color: '#4F4F4F',}}>5000</Text>
        <Text style={{fontSize: 12, marginLeft: 20, marginTop: -30, fontWeight: '400', textAlign: 'left', color: '#4F4F4F',}}>0898 - 8989 - 8989</Text>
        <View style={{marginLeft:120, marginTop: 50, backgroundColor: '#2ECC71', borderRadius: 5, borderWidth: 1, borderColor: '#E5DEDE',height: 33, width: 100}}>
        </View>
      </View>       
      </View>
      </View>
    
    );
  };

  
export default MenerimaPanggilan;