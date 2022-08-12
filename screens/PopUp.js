import React, {useState} from 'react';
import Tabs from '../navigation/tabs';
import {StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {SimpleModal} from './SimpleModal';
import SignInScreen from './SignInScreen'; 
const Pop = () => {
  const [isModalVisible, setisModalVisible] = useState(true);
  const [chooseData, setchooseData] = useState();

  const changeModalVisible=(bool)=>{
    setisModalVisible(bool);
  }
  const setData = (data) => {
    setchooseData(data); 
  }
  return (
    // <SafeAreaView style={StyleSheet.container}>  
      <NavigationContainer>
        {/* <Text style={styles.text}>
          {chooseData}
        </Text> */}
      <TouchableOpacity
      onPress={() => changeModalVisible(true)}
        style={styles.TouchableOpacity}
      >
        {/* <Text style={styles.text}>Open Modal</Text> */}
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType='fade'  
        visible={isModalVisible}
        nRequestClose={() => changeModalVisible(false)}
      >
      <SimpleModal
        changeModalVisible={changeModalVisible}
        setData={setData}
      />
      </Modal>
      <Tabs />
      </NavigationContainer>
    // </SafeAreaView> 
  );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'green'
    },
    TouchableOpacity: {
      backgroundColor: 'orange',
      paddingHorizontal: 50
    },
    text: {
      marginVertical: 20,
      fontSize: 20,
      fontWeight:'bold'
    }
  })


  





export default Pop;