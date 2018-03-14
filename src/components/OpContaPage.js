import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Button} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import LoginPage from './LoginPage';
import { Actions } from 'react-native-router-flux';

let actionCreators = {
};
const mapStateToProps = state => ({
    
})

export class OpContaPage extends Component {
    render(){
        return(
        <View style={{marginBottom: 10}}>
            <TouchableOpacity onPress={()=>{
                console.log(this.props);
                Actions.push(this.props.link)
            }}>
            <View style={style.viewOpPrincipal}>
                    <View style={style.viewOpcao}>
                        <View>
                            <MaterialIcons name={this.props.icone} size={26} color="#000" />
                        </View>
                        <Text style={style.textOpcao}>{this.props.funcao}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialIcons name='keyboard-arrow-right' size={26} color="#000" />
                    </View>
            </View>
            </TouchableOpacity>
            </View>
        )
    }    
}

const style = StyleSheet.create({
    viewOpPrincipal:{
        flexDirection: 'row', 
        height: 50, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#CCC',
        shadowOffset:{width:0.1,height:0.1},
        shadowColor: 'black',
        shadowOpacity: 0.2
    },
    viewOpcao:{
        paddingLeft: 10,
        flex: 1,
        flexDirection: 'row',
    },
    textOpcao:{
        color: '#000',
        paddingLeft: 5,
        fontSize: 16,
        fontFamily: 'Thonburi'
    },
})
export default connect (mapStateToProps, actionCreators)(OpContaPage)