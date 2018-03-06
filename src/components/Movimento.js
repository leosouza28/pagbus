import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export class Movimento extends Component{
    render(){
        return(
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            {/* Tipo de movimento / C ou D */}
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                {this.props.mov === 'credito' ? 
                <MaterialIcons name='add' size={10} color='rgba(0,20,120,1)' /> :
                <MaterialIcons name='remove' size={10} color='rgba(120,20,0,1)' />}
            </View> 
            {/* Data do movimento */}
            <View>
                <Text>12/03</Text>
            </View>
            {/* Dados Ônibus */}
            <View>
                <Text>PAGBUS-001</Text>
            </View>
            {/* Valor */}
            <View>
                <Text>R$ 10,00</Text>
            </View>
        </View>
        )
    }
}