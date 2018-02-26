import React,{Component} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class CarteiraPage extends Component{
    render(){
        return(
            <View style={style.viewPrincipal}>
                <Text>Carteira!</Text>
            </View>
        )
    }
}
const style = StyleSheet.create({
    viewPrincipal: {
        flex: 1,
        paddingTop: 15,
        // backgroundColor: '#beffaa'
    }
});