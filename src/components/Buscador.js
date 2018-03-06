import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export class Buscador extends Component{
    render(){
        return(
            <View style={style.viewDestino}>
                <View style={{flex:1}}>
                    <View style={{flex:6, flexDirection: 'row'}}>
                        <View style={{flex:1, justifyContent: 'flex-end', alignItems: 'center'}}>
                            <MaterialIcons name='my-location' color='#000' size={25}/>
                        </View>
                        <View style={{flex:5, justifyContent: 'flex-end'}}>
                            <TextInput
                            placeholder='Mostrar localização atual'
                            style={{borderBottomWidth: 1, marginRight: 25,padding: 2}}
                            />
                        </View>
                    </View>
                    <View style={{flex:6, flexDirection: 'row'}}>
                        <View style={{flex:1, justifyContent: 'flex-end', alignItems: 'center'}}>
                            <MaterialIcons name='location-on' color='#000' size={25}/>
                        </View>
                        <View style={{flex:5, justifyContent: 'flex-end'}}>
                            <TextInput
                                placeholder='Para onde vamos hoje?'
                                style={{borderBottomWidth: 1, marginRight: 25,padding: 2}}
                                returnKeyType={'search'}
                                />
                        </View>
                    </View>
                    <View style={{flex:5, justifyContent:'flex-end', alignItems: 'flex-end', paddingRight: 25, paddingBottom: 15}}>
                        <TouchableOpacity
                        style={style.botao}
                        >
                            <Text>Buscar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    viewDestino:{
        borderWidth: 1,
        borderColor: '#CCC',
        backgroundColor: '#FFF',
        height:120,
        width:300,
        top: 40,
        left: 40,
    },
    botao:{
        borderWidth: 1,
        borderColor: '#000',
        padding: 2.5,
        borderRadius: 5/2
    }
})