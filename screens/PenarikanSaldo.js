import React, {Component} from "react";
import { View, Text, Button } from "react-native";

export default class TarikSaldo extends Component 
{
    render()
    {
        return(
            <View style={{flex:1, justifyContent:'center', padding:10}}>
                <Text style={{fontSize:20, textAlign:'center', color:'#000000'}}>
                    Saldo anda berkurang Rp {this.props.route.params.P1}
                </Text>
            </View>
        );
    }
}