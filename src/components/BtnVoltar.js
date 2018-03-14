import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';

export class BtnVoltar extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity
                onPress={()=>Actions.pop()}>
                        <MaterialIcons name='keyboard-arrow-left' size={30} color='#000'/>
                </TouchableOpacity>
            </View>
        )
    }
}
