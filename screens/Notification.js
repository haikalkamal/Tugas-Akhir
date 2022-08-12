import React from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import fotomamang from '../fotomamang.png';


const Notification = () => {
    return(
        <View>
        <Component1 />
        </View>
    );
}



const Component1 = () => {
  return ( 
    <View style={{ marginTop: 0, marginLeft: 2, backgroundColor: '#FFFFFF', width: 390, height: 700, borderRadius: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, }}>
      <Text style={{fontSize: 14, marginTop: 30, fontWeight: '500', marginLeft: 25, color: '#000000',}}>Hari ini</Text>
        <Text style={{fontSize: 12, marginTop: 15, fontWeight: '400', marginLeft: 25, color: '#4F4F4F', marginRight: 20}}>Besok petugas sampah langganan kamu akan datang, persiapkan sampah mu!</Text>

        <Text style={{fontSize: 14, marginTop: 15, fontWeight: '500', marginLeft: 25, color: '#000000',}}>Kemarin</Text>
        <Text style={{fontSize: 12, marginTop: 15, fontWeight: '400', marginLeft: 25, color: '#4F4F4F', marginRight: 20}}>Besok petugas sampah langganan kamu akan datang, persiapkan sampah mu!</Text>

        <Text style={{fontSize: 14, marginTop: 15, fontWeight: '500', marginLeft: 25, color: '#000000',}}>Minggu ini</Text>
        <Text style={{fontSize: 12, marginTop: 15, fontWeight: '400', marginLeft: 25, color: '#4F4F4F', marginRight: 20}}>Besok petugas sampah langganan kamu akan datang, persiapkan sampah mu!</Text>  
        <Text style={{fontSize: 12, marginTop: 15, fontWeight: '400', marginLeft: 25, color: '#4F4F4F', marginRight: 20}}>Besok petugas sampah langganan kamu akan datang, persiapkan sampah mu!</Text>   
        <Text style={{fontSize: 12, marginTop: 15, fontWeight: '400', marginLeft: 25, color: '#4F4F4F', marginRight: 20}}>Besok petugas sampah langganan kamu akan datang, persiapkan sampah mu!</Text>
    </View>
  );
};



export default Notification;