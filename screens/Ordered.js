import React from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import fotomamang from '../fotomamang.png';
import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

const Ordered = () => {

  const navigation = useNavigation();

  const onHistoryOrderPress = () => {
  navigation.navigate('HistoryOrder');
  };

    return(
        <View>
        <Component1 /> 
        <Component2 /> 
        <CustomButton
        text="History"
        onPress={onHistoryOrderPress}
        bgColor="transparent"
        fontWeight="500"
        fgColor="#4F4F4F"
        marginTop={-768}
        marginLeft={150}
        fontSize={13}
      />
      <CustomButton
        text="Batalkan"
        onPress={onHistoryOrderPress}
        bgColor="transparent"
        fontWeight="500"
        fgColor="#FFFFFF"
        marginTop={-708}
        marginLeft={227}
        fontSize={11}
      />
        </View>
    );
};

const Component1 = () => {
    return ( 
    <View>
        <Text style={{fontSize: 13, marginTop: 25, fontWeight: '500', marginLeft: 100, color: '#2ECC71',}}>On progress</Text>
      </View>
    );
  };

  const Component2 = () => {
    return ( 
    <View>
        <View style={{marginTop: 20, marginLeft: 2, backgroundColor: '#FFFFFF', width: 390, height: 700, borderRadius: 15}}> 
        <View style={{marginTop: 25, marginLeft: 33, backgroundColor: '#FFFFFF', width: 325, height: 85, borderWidth: 1, borderColor: '#C4C4C4', borderRadius: 14}}>
        <Text style={{fontSize: 10, marginLeft: 25, marginTop: 15, fontWeight: '500', textAlign: 'left', color: '#4F4F4F',}}>Mahmad Alliyudin Saspamas</Text>
        <Text style={{fontSize: 10, marginLeft: 25, marginTop: 5, fontWeight: '500', textAlign: 'left', color: '#4F4F4F',}}>0898 - 8989 - 8989</Text>
        <View style={{marginLeft: 235, marginRight: 15, marginTop: 5, backgroundColor: '#F02424', borderRadius: 5, height: 23, width: 75}}>
        </View>
      </View>
      </View>
      </View>
    );
  };

export default Ordered;
