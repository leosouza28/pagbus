import React,{Component} from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';

export default class CartaoPage extends Component{
    render(){
        return(
            <View style={style.viewPrincipal}>
                <View style={style.viewTopo}>
                    <View style={style.cartao}>

                    </View>
                </View>
                <View style={style.viewBody}>
                    <ScrollView style={{flex: 1}}>
                        <Text>ScrollView</Text>
                    </ScrollView>
                </View>
                <View style={style.viewBottom}>
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
        flex: 4,
        padding: 15
    },
    viewBody: {
        flex: 6,
        paddingLeft: 15,
        paddingRight: 15
    },
    viewBottom:{
        flex: 1,
        borderTopWidth: 1,
        marginLeft: 15,
        marginRight: 15,
        // paddingLeft: 15,
        // paddingRight: 15
    },
    cartao:{
        flex: 1,
        borderWidth: 1,
        borderRadius: 5,
        // shadowOffset: {width: 1, height: 1},
        // shadowOpacity: 1,
        backgroundColor: 'rgba(0,0,0,1)'
    }
});