import React from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import back from '../back.png';
import fotomamang from '../fotomamang.png';
import chat from '../chat.png';
import telp from '../telp.png';
import status from '../status.png';
import garis from '../garis.png';
import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';


const StatusCall = () => {

  const navigation = useNavigation();

  const onTabsPress = () => {
  navigation.navigate('Tabs');

  };
  const onDetailSampahPress = () => {
  navigation.navigate('DetailSampah');
  
  };

    return(
        <View>
        <Component1 />
        <Component2 />
        <CustomButton
        text="Batalkan"
        onPress={onTabsPress}
        fontWeight="500"
        fontSize={11}
        fgColor="#FFFFFF"
        marginTop={-623}
        marginLeft={264}
      />
      <CustomButton
        text="Konfirmasi"
        onPress={onDetailSampahPress}
        fontWeight="400"
        fontSize={11}
        fgColor="#4F4F4F"
        marginTop={-816}
        marginLeft={5}
      />
    </View>
    );
}

const Component1 = () => {
    return ( 
    <View>
       
        <Text style={{fontSize: 14, marginTop: 15, fontWeight: 'bold', textAlign: 'center', color: '#4F4F4F',}}>Memanggil Mamang</Text>
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
        <View style={{marginTop: 0, marginLeft: 2, backgroundColor: '#FFFFFF', width: 390, height: 800, borderRadius: 1, borderBottomLeftRadius: 0, borderBottomRightRadius: 0,}}> 
        <Text style={{fontSize: 12, marginLeft: 105, marginTop: 20, fontWeight: '500', textAlign: 'left', color: '#4F4F4F',}}>Petugas sedang menuju rumahmu</Text>
        <Image source={status} style={{width:250, height:8, marginLeft:70, marginTop: 20}}/>   
        <Text style={{fontSize: 11, marginLeft: 50, marginTop: 10, fontWeight: '400', textAlign: 'left', color: '#4F4F4F',}}>Berangkat </Text>
        <Text style={{fontSize: 11, marginLeft: 300, marginTop: -15, fontWeight: '400', textAlign: 'left', color: '#4F4F4F',}}>Selesai</Text>
        <Image source={garis} style={{width:700, height:1, marginLeft:-155, marginTop: 20}}/>   
        <Text style={{fontSize: 11, marginLeft: 25, marginTop: 15, fontWeight: '400', textAlign: 'left', color: '#4F4F4F',}}>Mahmad Aliyudin Sapamas</Text>
        <Text style={{fontSize: 11, marginLeft: 25, marginTop: 7, fontWeight: '400', textAlign: 'left', color: '#4F4F4F',}}>0898 - 8989 - 8989</Text>
        <Image source={chat} style={{width: 27, height: 27, marginLeft: 290, marginTop: -35}} />
        <Image source={telp} style={{width: 20, height: 20, marginLeft: 340, marginTop: -23}} />
        <Image source={garis} style={{width:700, height:1, marginLeft:-155, marginTop: 30}}/>   
        <View style={{marginLeft: 288, marginRight: 15, marginTop: 20, backgroundColor: '#F02424', borderRadius: 5, height: 23, width: 75}}>
          
        </View>
        

    </View>
    </View>
    );
  };

  
export default StatusCall;