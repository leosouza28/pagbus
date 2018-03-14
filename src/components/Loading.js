import React, {Component} from 'react';
import {ActivityIndicator, View,Text} from 'react-native'

export class Loading extends Component{
    render(){
        return(
            <View style={style.viewPrincipal}>
                <View style={style.viewProgress}>
                    <ActivityIndicator size='large'/>
                    <Text style={{paddingTop: 5}}>Aguarde...</Text>
                </View>
            </View>
        )
    }
}
const style = {
    viewPrincipal:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    viewProgress:{
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems:'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: 100,
        height: 100,
        borderRadius: 20/2
    }
}