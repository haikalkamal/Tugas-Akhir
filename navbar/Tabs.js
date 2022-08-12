import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Home from '../screens/Home';
import Ordered from '../screens/Ordered';
import Call from '../screens/Call';
import Notification from '../screens/Notification';
import Account from '../screens/Account';
import home from '../home.png';
import notification from '../notifikasi.png';
import ordered from '../ordered.png';
import account from '../account.png';
import call from '../call.png';

  
const Tab = createBottomTabNavigator();


const Tabs = () => {
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
            <Tab.Screen name = " " component={Home} options ={{
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

        <Tab.Screen name = "  " component={Ordered} options ={{
                tabBarIcon: ({focused}) => (
                  <View style={{alignItems:'center', justifyContent: 'center', top: 10}}>
                      <Image
                          source={require('../ordered.png')}
                          resizeMode="contain"
                          style={{
                              width: 16,
                              height: 20,
                              top: -6,
                              tintColor: focused ? '#2ECC71' : '#2ECC71',
                          }}
                        />
                          <Text style= {{color: focused ? '#2ECC71' : '#2ECC71', fontSize: 11}}>Ordered</Text>
                  </View>  
                ),
            }} />

        <Tab.Screen name = "   " component={Call} options ={{
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

        <Tab.Screen name = "     " component={Notification} options ={{
                tabBarIcon: ({focused}) => (
                  <View style={{alignItems:'center', justifyContent: 'center', top: 10}}>
                      <Image
                          source={require('../notifikasi.png')}
                          resizeMode="contain"
                          style={{
                              width: 16,
                              height: 20,
                              top: -5,
                              tintColor: focused ? '#2ECC71' : '#2ECC71',
                          }}
                        />
                          <Text style= {{color: focused ? '#2ECC71' : '#2ECC71', fontSize: 11}}>Notification</Text>
                  </View>  
                ),
            }} />

        <Tab.Screen name = "      " component={Account} options ={{
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
           

        </Tab.Navigator>
        
    );
}

export default Tabs;