import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import HomePetugas from '../screens/HomePetugas';
import LanggananPetugas from '../screens/LanggananPetugas';
import MenerimaPanggilan from '../screens/MenerimaPanggilan';
import Notification from '../screens/Notification';
import AccountPetugas from '../screens/AccountPetugas';
import home from '../home.png';
import account from '../account.png';
import Call from '../screens/Call';
import notification from '../notifikasi.png';
import subscribe from '../subscribe.png';
import power from '../power.png';
import StatusAkun from '../screens/StatusAkun';
import DaftarLanggananPetugas from '../screens/DaftarLanggananPetugas';




const Tab = createBottomTabNavigator();

const TabsPetugas = () => {
    return(
        <Tab.Navigator 
            screenOptions={{
                headerShown:false,
                tabBarStyle: {
                    bottom:0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 0,
                    height: 70,
                    width: 390,
                }
            }}
            tabBarOptions={{
                showLabel: true,
                
            }}
        >
            <Tab.Screen name = " " component={HomePetugas} options ={{
                tabBarIcon: ({focused}) => (
                  <View style={{alignItems:'center', justifyContent: 'center', top: 10}}>
                      <Image
                          source={require('../home.png')}
                          resizeMode="contain"
                          style={{
                              width: 16,
                              height: 20,
                              top: -5,
                              tintColor: focused ? '#2ECC71' : '#2ECC71',
                          }}
                        />
                          <Text style= {{color: focused ? '#2ECC71' : '#2ECC71', fontSize: 11}}>Home</Text>
                  </View>  
                ),
            }} />

        <Tab.Screen name = "  " component={DaftarLanggananPetugas} options ={{
                tabBarIcon: ({focused}) => (
                  <View style={{alignItems:'center', justifyContent: 'center', top: 10}}>
                      <Image
                          source={require('../subscribe.png')}
                          resizeMode="contain"
                          style={{
                              width: 40,
                              height: 28,
                              top: 0,
                              tintColor: focused ? '#2ECC71' : '#2ECC71',
                          }}
                        />
                          <Text style= {{color: focused ? '#2ECC71' : '#2ECC71', fontSize: 11, marginBottom: 9}}>Langganan</Text>
                  </View>  
                ),
            }} />

        <Tab.Screen name = "   " component={MenerimaPanggilan} options ={{
                tabBarIcon: ({focused}) => (
                  <View style={{alignItems:'center', justifyContent: 'center', top: 10}}>
                      <Image
                          source={require('../call.png')}
                          resizeMode="contain"
                          style={{
                              width: 30,
                              height: 30,
                              top: -5,
                              tintColor: focused ? '#2ECC71' : '#2ECC71',
                          }}
                        />
                          <Text style= {{color: focused ? '#2ECC71' : '#2ECC71', fontSize: 11}}></Text>
                  </View>  
                ),
            }} />      

        <Tab.Screen name = "      " component={AccountPetugas} options ={{
                tabBarIcon: ({focused}) => (
                  <View style={{alignItems:'center', justifyContent: 'center', top: 10}}>
                      <Image
                          source={require('../account.png')}
                          resizeMode="contain"
                          style={{
                              width: 16,
                              height: 20,
                              top: -6,
                              tintColor: focused ? '#2ECC71' : '#2ECC71',
                          }}
                        />
                          <Text style= {{color: focused ? '#2ECC71' : '#2ECC71', fontSize: 11}}>Account</Text>
                  </View>  
                ),
            }} />                  

        <Tab.Screen name = "     " component={StatusAkun} options ={{
                tabBarIcon: ({focused}) => (
                  <View style={{alignItems:'center', justifyContent: 'center', top: 10}}>
                      <Image
                          source={require('../power.png')}
                          resizeMode="contain"
                          style={{
                              width: 23,
                              height: 25,
                              top: -5,
                              tintColor: focused ? '#2ECC71' : '#2ECC71',
                          }}
                        />
                          <Text style= {{color: focused ? '#2ECC71' : '#2ECC71', fontSize: 11,marginBottom: 6}}>StatusAkun</Text>
                  </View>  
                ),
            }} />

        
           

        </Tab.Navigator>
        
    );
}

export default TabsPetugas;