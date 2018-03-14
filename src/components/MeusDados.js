import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import {BtnVoltar} from './BtnVoltar';

const actionCreators = {
}

const mapStateToProps = state => ({
})

export class ContaPage extends Component{
    render(){
         return(
            <View style={{flex:1}}>
                <View style={style.viewTopo}>
                    <View style={{justifyContent: 'center', paddingLeft: 15,paddingRight:15,paddingTop: 2.5}}>
                        <BtnVoltar/>
                    </View>
                    <View style={{justifyContent: 'center',flex :1}}>
                        <Text style={style.textLabel}>Meus dados</Text>
                    </View>
                </View>
                <View style={style.viewCorpo}>
                
                </View>

                <View style={style.viewRodape}>
                </View>
            </View>
        )
    }
}


const style = StyleSheet.create({
    
});
export default connect (mapStateToProps, actionCreators)(MeusDados)