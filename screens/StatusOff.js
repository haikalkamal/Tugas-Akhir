import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import profile from '../profile.jpg';
import banner from '../banner.jpeg';
import trash from '../trash.png';
import fotomamang from '../fotomamang.png';
import {Text, View, Image, TextInput, StyleSheet, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';

const HomePetugas = () => {

  const navigation = useNavigation();

const onStatusAkunPress = () => {
  navigation.navigate('StatusAkun');
};


    return(
      <ScrollView style={{width:'100%'}}>
        <View>
        <Component1 />
        <CustomButton
          text="Status Akun"
          onPress={onStatusAkunPress}
          bgColor="transparent"
          fontWeight="400"
          fgColor="#80D484"
          marginTop={-60}
          marginLeft={240}
          fontSize={12}
        />
        <Component2 />
        <Component3 />
        <Component4 />
        <Component5 />
        <Component6 />
        </View>
      </ScrollView>
        
    );
}

const Component1 = () => {
    return ( 
    <View>
        <View style={{marginTop: 20, marginLeft: 27, marginRight: 25, backgroundColor: '#80D484',  width: 340, height: 125, borderWidth: 1, borderColor: '#2ECC71', borderRadius: 15}}>
        <Text style={{fontSize: 14, marginTop: 15, fontWeight: 'bold', marginLeft: 85, color: '#FFFFFF',}}>Muhammad Aliyudin S</Text>
        <Text style={{fontSize: 11, marginTop: 5, fontWeight: '400', marginLeft: 85, color: '#FFFFFF',}}>@Aliyudin</Text>
        <Image source={fotomamang} style={{width: 54, height: 54, borderRadius: 360, marginLeft: 15, marginBottom: 20, marginTop: -35}} />
        <View style={{ marginLeft: 244, marginRight: 15, marginTop: -2, backgroundColor: '#FFFFFF', borderRadius: 8, height: 23, width: 85 }}>
          
        </View>
      </View>
      </View>
    );
  };
  
  const Component2 = () => {
    return (
      <View>
        <Text style={{fontSize:14, textAlign:'center', color: '#4F4F4F', fontWeight: '400', marginTop: -45}}>Saldo Anda: Rp 50.000</Text>      
      </View>
    );
  };
  
  const Component3 = () => {
    return (
      <View>
        <View style={{marginTop: -10, height: 45, marginLeft: 50, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#C4C4C4', width: 135, borderRadius: 8}}>
        <Text style={{marginBottom: 10, fontSize:14, textAlign:'center', color: '#80D484', fontWeight: 'bold', marginTop: 10}}>Top Up</Text>   
        <View style={{marginLeft: 150, marginTop: -41, height: 45, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#C4C4C4', width: 135, borderRadius: 8}}>
        <Text style={{marginBottom: 10, fontSize:14, textAlign:'center', color: '#80D484', fontWeight: 'bold', marginTop: 10}}>Withdraw</Text>
        </View>
        </View>
      </View>
    );
  };
  
  const Component4 = () => {
    return (
      <View>
        <View>
        <Image source={banner} style={{width: 340, height: 125, borderRadius: 14, borderColor: '#E5DEDE', borderWidth: 1, marginLeft: 27, marginRight: 25, marginTop: 20}} />
        <Text style={{fontSize:14, marginLeft: 27, color: '#4F4F4F', fontWeight: '500', marginTop: 20}}>News</Text>      
        </View>
      </View>
    );
  };
  
  const Component5 = () => {
    return (
      <View>
        <View style={{marginTop: 15, height: 159, marginLeft: 25, marginRight: 25, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E5DEDE', width: 340, borderRadius: 14}}>
        <Image source={trash} style={{width: 338, height: 92, borderRadius: 14, marginLeft: 0, marginTop: -1}} />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginLeft: 170, color: '#FFFFFF', marginTop: -85 }}>7 Fakta Tentang Sampah</Text>
        <Text style={{fontSize:12, marginLeft: 10, marginRight: 35, color: '#4F4F4F', fontWeight: '500', marginTop: 70}}>Ini dia, 7 fakta yang harus kalian ketahui mengenai Sampah</Text>     
        <Text style={{fontSize:10, marginLeft: 210, color: '#4F4F4F', fontWeight: '500', marginTop: 10}}>Upnews.co 15 Juli, 2020</Text>      
        </View>
        </View>
    );
  };

  const Component6 = () => {
    return (
      <View>
        <View style={{marginTop: 15, height: 159, marginLeft: 25, marginRight: 25, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E5DEDE', width: 340, borderRadius: 14}}>
        <Image source={trash} style={{width: 338, height: 92, borderRadius: 14, marginLeft: 0, marginTop: -1}} />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginLeft: 170, color: '#FFFFFF', marginTop: -85 }}>7 Fakta Tentang Sampah</Text>
        <Text style={{fontSize:12, marginLeft: 10, marginRight: 35, color: '#4F4F4F', fontWeight: '500', marginTop: 70}}>Ini dia, 7 fakta yang harus kalian ketahui mengenai Sampah</Text>     
        <Text style={{fontSize:10, marginLeft: 210, color: '#4F4F4F', fontWeight: '500', marginTop: 10}}>Upnews.co 15 Juli, 2020</Text>      
        </View>
        </View>
    );
  };
  
  
export default HomePetugas;