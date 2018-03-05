import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export class TabNavigator extends Component {
    render(){
        return(
            <View style={[styles.container, this.props.sceneStyle]}>
                <ButtonTab titulo='Cartao' icone='credit-card' acao='cartao'/>
                <ButtonTab titulo='Conta' icone='account-circle' acao='conta'/>
            </View>
        )
    }
}
class ButtonTab extends Component {
    nav(page){
        if(page == 'cartao'){
            Actions.cartao();
        } else if (page == 'conta'){
            Actions.conta();
        }
    }
    render(){
        return(
            <View style={{flex: 1}}>
                <TouchableOpacity 
                style={{flex: 1, alignItems: 'center', justifyContent: 'space-between', padding: 10}}
                onPress={()=>this.nav(this.props.acao)}>
                    <MaterialIcons name={this.props.icone} size={24} color="#000" />
                    <Text>{this.props.titulo}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      flexDirection: 'row',
      backgroundColor: '#FFF'
    },
});
  