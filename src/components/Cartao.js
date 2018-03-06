import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';


export class Cartao extends Component {
    render(){
        return(
            <View style={{borderWidth: 1, flex: 1}}>
                <View style={{flex: 5, flexDirection: 'row'}}>
                    <View style={{flex:1}}>
                    </View>
                    <View style={{flex:1}}>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row'}}>
                    <View style={{flex:1, justifyContent: 'center', paddingLeft: 15}}>
                        <Text style={style.textNumCartao}>{this.props.numcartao}</Text>
                    </View>
                </View>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex:1, justifyContent: 'center', paddingLeft: 15}}>
                        <Text style={style.textTitular}>{this.props.titular}</Text>
                    </View>
                </View>

            </View>
        )
    }
}
const style = StyleSheet.create({
    textNumCartao:{
        fontSize: 15,
        color: '#000',
        fontFamily: 'Thonburi',
        fontWeight: 'bold',
    },
    textTitular:{
        fontSize: 15,
        color: '#000',
        fontFamily: 'Thonburi',
        fontWeight: 'bold',
    }
})