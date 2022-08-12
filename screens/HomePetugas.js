import React, {useState} from 'react';
import { Component } from 'react/cjs/react.production.min';
import profile from '../profile.jpg';
import banner from '../banner.jpeg';
import trash from '../trash.png';
import { Text, View, Image, TextInput, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';
import LanggananUser from './LanggananUser';

const HomePetugas = () => {

  const navigation = useNavigation();

  const onStatusPetugasPress = () => {
    navigation.navigate('StatusPetugas');
  };
  const onTopUpPetugasPress = () => {
    navigation.navigate('TopUpPetugas');
  };
 const onTarikSaldoPetugasPress = () => {
  navigation.navigate('TarikSaldoPetugas');
  };

  return (
    <ScrollView style={{ width: '100%' }}>
      <View>
        <Component1 />
        <CustomButton
          text="Status Akun"
          onPress={onStatusPetugasPress}
          bgColor="transparent"
          fontWeight="500"
          fgColor="#80D484"
          marginTop={-717}
          marginLeft={220}
          fontSize={12}
        />
        <Component2 />
        <CustomButton
          text="Top Up"
          onPress={onTopUpPetugasPress}
          bgColor="transparent"
          fontWeight="500"
          fgColor="#80D484"
          marginTop={-709}
          marginLeft={-160}
          fontSize={14}
        />
        <CustomButton
          text="Withdraw"
          onPress={onTarikSaldoPetugasPress}
          bgColor="transparent"
          fontWeight="500"
          fgColor="#80D484"
          marginTop={-768}
          marginLeft={145}
          fontSize={14}
        />
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
      <View style={{ marginTop: 0, marginLeft: 0, marginRight: 25, backgroundColor: '#ffffff', width: 400, height: 800, borderWidth: 1, borderColor: '#E5DEDE', borderRadius: 0 }}> 
      <View style={{ marginTop: 25, marginLeft: 27, marginRight: 25, backgroundColor: '#80D484', width: 335, height: 125, borderWidth: 1, borderColor: '#E5DEDE', borderRadius: 8  }}> 

        <Text style={{ fontSize: 20, marginTop: 15, fontWeight: 'bold', marginLeft: 30, color: '#ffffff', }}>Halo, Aliyudin </Text>
        <View style={{ marginLeft: 236, marginRight: 15, marginTop: 38, backgroundColor: '#ffffff', borderRadius: 8, borderWidth: 1, borderColor: '#C4C4C4',height: 30, width: 80 }}>
          
        </View>
      </View>
    </View>
    </View>

  );
};

const Component2 = () => {
  return (
    <View>
      <View style={{ marginTop: -690, height: 45, marginLeft: 50, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#C4C4C4', width: 135, borderRadius: 8 }}>
        
        <View style={{ marginLeft: 150, marginTop: -1, height: 45, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#C4C4C4', width: 135, borderRadius: 8 }}>
        </View>
      </View>
    </View>
  );
};

const Component3 = () => {
  return (
    <View>
      <View>
        <Image source={banner} style={{ width: 340, height: 125, borderRadius: 14, borderColor: '#E5DEDE', borderWidth: 1, marginLeft: 27, marginRight: 25, marginTop: -745 }} />
      </View>
    </View>
  );
};

const Component4 = () => {
  return (
    <View>
      <View>
        <Text style={{ fontSize: 14, marginLeft: 27, color: '#4F4F4F', fontWeight: '500', marginTop: -605 }}>News</Text>
      </View>
    </View>
  );
};

const Component5 = () => {
  return (
    <View>
      <View style={{ marginTop: -570, height: 159, marginLeft: 25, marginRight: 25, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E5DEDE', width: 340, borderRadius: 14 }}>
        <Image source={trash} style={{ width: 338, height: 92, borderRadius: 14,  marginLeft: 0, marginTop: -1 }} />
        <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 170, color: '#FFFFFF', marginTop: -85 }}>7 Fakta Tentang Sampah</Text>
        <Text style={{ fontSize: 12, marginLeft: 10, marginRight: 35, color: '#4F4F4F', fontWeight: '500', marginTop: 70 }}>Ini dia, 7 fakta yang harus kalian ketahui mengenai Sampah</Text>
        <Text style={{ fontSize: 10, marginLeft: 210, color: '#4F4F4F', fontWeight: '500', marginTop: 10 }}>Upnews.co 15 Juli, 2020</Text>
      </View>
    </View>
  );
};

const Component6 = () => {
  return (
    <View>
      <View style={{ marginTop: -390, height: 159, marginLeft: 25, marginRight: 25, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E5DEDE', width: 340, borderRadius: 14 }}>
        <Image source={trash} style={{ width: 338, height: 92, borderRadius: 14, marginLeft: 0, marginTop: -1 }} />
        <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 170, color: '#FFFFFF', marginTop: -85 }}>7 Fakta Tentang Sampah</Text>
        <Text style={{ fontSize: 12, marginLeft: 10, marginRight: 35, color: '#4F4F4F', fontWeight: '500', marginTop: 70 }}>Ini dia, 7 fakta yang harus kalian ketahui mengenai Sampah</Text>
        <Text style={{ fontSize: 10, marginLeft: 210, color: '#4F4F4F', fontWeight: '500', marginTop: 10 }}>Upnews.co 15 Juli, 2020</Text>
      </View>
    </View>
  );
};




export default HomePetugas;