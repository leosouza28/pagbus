import React,{Component} from 'react';
import { StyleSheet, View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Actions} from 'react-native-router-flux';
import {Cartao} from './Cartao';
import Movimento from './Movimento';


let movs = [
    {
        id: 0,
        data: '10/01/2018',
        descricao: 'Recarga',
        movimento: 'C',
        valor: 50.0
    },
    {
        id: 1,
        data: '12/01/2018',
        descricao: 'Viagem XXX',
        movimento: 'D',
        valor: 15.0
    },
    {
        id: 2,
        data: '13/01/2018',
        descricao: 'Viagem XXX',
        movimento: 'D',
        valor: 20.0
    }
]

let soma = 0;


export default class CartaoPage extends Component{
    render(){
        movs.map((mov,key) => {
            if(mov.movimento == 'C' ){
                soma += mov.valor
            } else {
                soma -= mov.valor;
            }
        })


        return(
            <View style={style.viewPrincipal}>
                <View style={style.viewTopo}>
                    <View style={style.viewLabel}>
                            <TouchableOpacity 
                            onPress={()=>Actions.pop()}
                            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <MaterialIcons name='keyboard-arrow-left' size={24} color='#000'/>
                            </TouchableOpacity>
                            <View style={{flex: 5}}>
                                <Text style={style.textLabel}>
                                Cartão</Text>
                            </View>
                    </View>
                </View>
                <View style={style.viewBody}>
                    <View style={{flex: 1}}>
                        <View style={style.cartao}>
                            <Cartao titular='Lobo Developers' numcartao='9999 0000 90909090'/>
                        </View>
                        <View style={{flex: 8}}>
                            <ScrollView style={{flex: 1}}>
                            {
                                movs.map((m,key) => (
                                    <Movimento
                                    key={key}
                                    tipoMov={m.movimento}
                                    dtMov={m.data}
                                    desc={m.descricao}
                                    valor={m.valor}
                                    />
                                ))
                            }
                            </ScrollView>
                        </View>
                    </View>
                </View>
                <View style={style.viewBottom}>
                    <Text style={style.textLabel}>Disponível:</Text>
                    <Text style={style.textLabel}>
                       {soma}
                    </Text>
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    viewPrincipal: {
        flex: 1,
        paddingTop: 15
    },
    viewTopo:{
        flex: 1
    },
    viewLabel:{
        flexDirection: 'row',
        paddingTop: 15,
        paddingLeft: 5,
        borderBottomWidth: 1.5,
        borderColor: 'grey',
        paddingBottom: 10,
    },
    viewBody: {
        flex: 6,
        paddingLeft: 15,
        paddingRight: 15
    },
    viewBottom:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        marginLeft: 15,
        marginRight: 15,
    },
    cartao:{
        flex: 6,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15
    },
    textLabel:{
        fontSize: 26,
        color: '#000',
        fontFamily: 'Thonburi',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});