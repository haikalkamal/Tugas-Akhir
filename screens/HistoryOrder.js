import React from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import fotomamang from '../fotomamang.png';
import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

const HistoryOrder = () => {

  const navigation = useNavigation();

  const onTabsPress = () => {
  navigation.navigate('Tabs');

  };

    return(
        <View>
        <Component1 /> 
        <Component2 /> 
      <CustomButton
        text="On progress"
        onPress={onTabsPress}
        bgColor="#transparent"
        fontWeight="500"
        fgColor="#4F4F4F"
        marginTop={-770}
        marginLeft={-100}
        fontSize={13}
      />
      <CustomButton
        text="Kembali"
        onPress={onTabsPress}
        bgColor="#transparent"
        fontWeight="400"
        fgColor="#FFFFFF"
        marginTop={-158}
        marginLeft={5}
        fontSize={13}
      />
        </View>
    );
};

const Component1 = () => {
    return ( 
    <View>

        <Text style={{fontSize: 13, marginTop: 25, fontWeight: '500', marginLeft: 250, color: '#2ECC71',}}>History</Text>
      </View>
    );
  };

  const Component2 = () => {
    return ( 
    <View>
        <View style={{marginTop: 20, marginLeft: 2, backgroundColor: '#FFFFFF', width: 390, height: 700, borderRadius: 15}}>
        <View style={{marginTop: 25, marginLeft: 33, backgroundColor: '#FFFFFF', width: 325, height: 90, borderWidth: 1, borderColor: '#C4C4C4', borderRadius: 14}}>
        <Text style={{fontSize: 10, marginLeft: 25, marginTop: 15, fontWeight: '500', textAlign: 'left', color: '#4F4F4F',}}>Mahmad Alliyudin Saspamas</Text>
        <Text style={{fontSize: 10, marginLeft: 25, marginTop: 5, fontWeight: '500', textAlign: 'left', color: '#4F4F4F',}}>0898 - 8989 - 8989</Text>
        <View style={{marginLeft: 255, marginRight: 15, marginTop: 10, backgroundColor: '#F02424', borderRadius: 5, height: 20, width: 55}}>
          <Text style={{fontSize: 11, fontWeight: '400', marginTop: 2, marginLeft: 15, color: '#FFFFFF'}}>Batal</Text>
        </View>

        <View style={{marginTop: 25, marginLeft: -3, backgroundColor: '#FFFFFF', width: 325, height: 85, borderWidth: 1, borderColor: '#C4C4C4', borderRadius: 14}}>
        <Text style={{fontSize: 10, marginLeft: 25, marginTop: 15, fontWeight: '500', textAlign: 'left', color: '#4F4F4F',}}>Mahmad Alliyudin Saspamas</Text>
        <Text style={{fontSize: 10, marginLeft: 25, marginTop: 5, fontWeight: '500', textAlign: 'left', color: '#4F4F4F',}}>0898 - 8989 - 8989</Text>
        <View style={{marginLeft: 255, marginRight: 15, marginTop: 5, backgroundColor: '#2ECC71', borderRadius: 5, height: 20, width: 55}}>
          <Text style={{fontSize: 10, fontWeight: '400', marginTop: 2, marginLeft: 12, color: '#FFFFFF'}}>Selesai</Text>
        </View>

        <View style={{marginTop: 25, marginLeft: -2, backgroundColor: '#FFFFFF', width: 325, height: 85, borderWidth: 1, borderColor: '#C4C4C4', borderRadius: 14}}>
        <Text style={{fontSize: 10, marginLeft: 25, marginTop: 15, fontWeight: '500', textAlign: 'left', color: '#4F4F4F',}}>Mahmad Alliyudin Saspamas</Text>
        <Text style={{fontSize: 10, marginLeft: 25, marginTop: 5, fontWeight: '500', textAlign: 'left', color: '#4F4F4F',}}>0898 - 8989 - 8989</Text>
        <View style={{marginLeft: 255, marginRight: 15, marginTop: 5, backgroundColor: '#2ECC71', borderRadius: 5, height: 20, width: 55}}>
          <Text style={{fontSize: 10, fontWeight: '400', marginTop: 2, marginLeft: 12, color: '#FFFFFF'}}>Selesai</Text>
        </View>
        <View style={{marginLeft: 70, marginRight: 15, marginTop: 320, backgroundColor: '#80D484', borderRadius: 8, height: 40, width: 200}}>
          
        </View>
      </View>
      </View>
      </View>
      </View>
      </View>
    );
  };
  
export default HistoryOrder;
