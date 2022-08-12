// import React, { useContext, useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Pressable, SafeAreaView } from 'react-native';
// import CustomInput from './CustomInput/CustomInput';
// import CustomButton from './CustomButton/CustomButton';
// import { useNavigation } from '@react-navigation/native';
// import { AuthContext } from './context/AuthContext';

// export default function IsiSaldo(){

//     const navigation = useNavigation();

//     const onTabsPressed = () => {
//         navigation.navigate('Tabs');
//     };

//     const[Saldo, isiSaldo]=useState(0)

//     return(
//     <SafeAreaView>
//     <View style={{marginLeft: 150, marginTop: 200, borderRadius: 5, borderWidth: 1, borderColor: '#E5DEDE', height: 33, width: 100}}>
//         <View>
//             <Text style={{fontSize:15, color:'black', alignSelf:'center', marginTop: 4}}>Rp {Saldo}</Text>
//         </View>
//     </View>
    
//     <TouchableOpacity onPress={()=>isiSaldo(Saldo+5000)}>
//         <View>
//             <View style={{marginLeft: 90, marginTop: 20, borderRadius: 5, borderWidth: 1, borderColor: '#E5DEDE', height: 33, width: 100}}>
//                 <Text style={{fontSize:14, color:'#4f4f4f', marginTop: 6, marginLeft: 33}}>5.000</Text>
//             </View>
//         </View>
//     </TouchableOpacity>

//     <TouchableOpacity onPress={()=>isiSaldo(Saldo+10000)}>
//         <View>
//             <View style={{marginLeft: 210, marginTop: -33, borderRadius: 5, borderWidth: 1, borderColor: '#E5DEDE', height: 33, width: 100}}>
//                 <Text style={{fontSize:14, color:'#4f4f4f', marginTop: 6, marginLeft: 26}}>10.000</Text>
//             </View>
//         </View>
//     </TouchableOpacity>

//     <TouchableOpacity onPress={()=>isiSaldo(Saldo+15000)}>
//         <View>
//             <View style={{marginLeft: 90, marginTop: 20, borderRadius: 5, borderWidth: 1, borderColor: '#E5DEDE', height: 33, width: 100}}>
//                 <Text style={{fontSize:14, color:'#4f4f4f', marginTop: 6, marginLeft: 26}}>15.000</Text>
//             </View>
//         </View>
//     </TouchableOpacity>

//     <TouchableOpacity onPress={()=>isiSaldo(Saldo+20000)}>
//         <View>
//             <View style={{marginLeft: 210, marginTop: -33, borderRadius: 5, borderWidth: 1, borderColor: '#E5DEDE', height: 33, width: 100}}>
//                 <Text style={{fontSize:14, color:'#4f4f4f', marginTop: 6, marginLeft: 26}}>20.000</Text>
//             </View>
//         </View>
//     </TouchableOpacity>

//     <TouchableOpacity onPress={()=>isiSaldo(Saldo+25000)}>
//         <View>
//             <View style={{marginLeft: 90, marginTop: 20, borderRadius: 5, borderWidth: 1, borderColor: '#E5DEDE', height: 33, width: 100}}>
//                 <Text style={{fontSize:14, color:'#4f4f4f', marginTop: 6, marginLeft: 26}}>25.000</Text>
//             </View>
//         </View>
//     </TouchableOpacity>

//     <TouchableOpacity onPress={()=>isiSaldo(Saldo+30000)}>
//         <View>
//             <View style={{marginLeft: 210, marginTop: -33, borderRadius: 5, borderWidth: 1, borderColor: '#E5DEDE', height: 33, width: 100}}>
//                 <Text style={{fontSize:14, color:'#4f4f4f', marginTop: 6, marginLeft: 26}}>30.000</Text>
//             </View>
//         </View>
//     </TouchableOpacity>

//     <TouchableOpacity onPress={()=>isiSaldo(Saldo+35000)}>
//         <View>
//             <View style={{marginLeft: 90, marginTop: 20, borderRadius: 5, borderWidth: 1, borderColor: '#E5DEDE', height: 33, width: 100}}>
//                 <Text style={{fontSize:14, color:'#4f4f4f', marginTop: 6, marginLeft: 26}}>35.000</Text>
//             </View>
//         </View>
//     </TouchableOpacity>

//     <TouchableOpacity onPress={()=>isiSaldo(Saldo+40000)}>
//         <View>
//             <View style={{marginLeft: 210, marginTop: -33, borderRadius: 5, borderWidth: 1, borderColor: '#E5DEDE', height: 33, width: 100}}>
//                 <Text style={{fontSize:14, color:'#4f4f4f', marginTop: 6, marginLeft: 26}}>40.000</Text>
//             </View>
//         </View>
//     </TouchableOpacity>

//     <TouchableOpacity onPress={()=>isiSaldo(Saldo+45000)}>
//         <View>
//             <View style={{marginLeft: 90, marginTop: 20, borderRadius: 5, borderWidth: 1, borderColor: '#E5DEDE', height: 33, width: 100}}>
//                 <Text style={{fontSize:14, color:'#4f4f4f', marginTop: 6, marginLeft: 26}}>45.000</Text>
//             </View>
//         </View>
//     </TouchableOpacity>

//     <TouchableOpacity onPress={()=>isiSaldo(Saldo+50000)}>
//         <View>
//             <View style={{marginLeft: 210, marginTop: -33, borderRadius: 5, borderWidth: 1, borderColor: '#E5DEDE', height: 33, width: 100}}>
//                 <Text style={{fontSize:14, color:'#4f4f4f', marginTop: 6, marginLeft: 26}}>50.000</Text>
//             </View>
//         </View>
//     </TouchableOpacity>
    
//     <CustomButton 
//         text="Oke" 
//         onPress={onTabsPressed}
//         fontWeight="bold "
//         bgColor="transparent"
//         marginTop={-10}
//         fontSize={14}
//         fgColor="#4F4F4F"
//     />

//     <TouchableOpacity onPress={()=>isiSaldo(Saldo-5000)}>
//         <View>
//             <Text style={{fontSize:14, color:'blue', marginTop: 20, alignSelf:'center'}}>Kurang</Text>
//         </View>
//     </TouchableOpacity>
//     </SafeAreaView>
// );
// }

import React, {Component} from "react";
import { View, TextInput, Button } from "react-native";


export default class IsiSaldo extends Component 
{
    constructor(props)
    {
        super(props);
        this.state={saldo:''};
    }
    render()
    {
        return(
            <View style={{flex:1, justifyContent:'center', padding:10}}>
                <TextInput
                    placeholder="Rp "
                    style={{borderBottomWidth:1, borderBottomColor:'#c4c4c4', marginBottom:20}}
                    onChangeText={saldo=>this.setState({saldo})}
                />
                <Button
                    title="Simpan"
                    onPress={()=>this.props.navigation.navigate('TopUp',{P1:this.state.saldo})}
                    color='#80D484'
                    
                />
            </View>
        );
    }
}