import React, {useContext} from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from "../SignInScreen/SignInScreen";
import SignUpScreen from "../SignUpScreen/SignUpScreen";
import Home from '../Home';
import Account from "../Account";
import { AuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

const Navigasi = () => {
    // const {userInfo} = useContext(AuthContext);

    return(
        <NavigationContainer>
            <Stack.Navigator>
                {userInfo.access_token ? (
                    <Stack.Screen name="Home" component={Home} />
                ) : (
                <>

                <Stack.Screen
                    name="Login"
                    component={SignInScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Register"
                    component={SignUpScreen}
                    options={{headerShown: false}}
                />
                </>
                )}
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Navigasi;