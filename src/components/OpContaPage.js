import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Modal, Button} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';

import LoginPage from './LoginPage';
import {modificaStatusModal,modificaModal} from '../actions/ContaPageActions';

let actionCreators = {
    modificaStatusModal,
    modificaModal
};
const mapStateToProps = state => ({
    modalStatus: state.ContaPageReducer.modalStatus,
    modalProp: state.ContaPageReducer.modal
})

export class OpContaPage extends Component {
    render(){
        return(
        <View style={{marginBottom: 10}}>
            <TouchableOpacity onPress={()=>{
                let modalProp = this.props.modal
                this.props.modificaStatusModal(true);
                this.props.modificaModal(modalProp);
                console.log(this.props);
            }}>
            
                <View style={style.viewOpPrincipal}>
                        <View style={style.viewOpcao}>
                            <View>
                                <MaterialIcons name={this.props.icone} size={26} color="#000" />
                            </View>
                                    <Text style={style.textOpcao}>{this.props.funcao}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            {this.props.cidade != '' ? <Text style={{fontSize: 12}}>{this.props.cidade}</Text> : false}
                            <MaterialIcons name='keyboard-arrow-right' size={26} color="#000" />
                        </View>
                </View>
            </TouchableOpacity>
            {this.props.modalProp == 'Login' ?
            <View>
                <Modal 
                visible={true}
                animationType={'fade'}
                onRequestClose={()=>{
                    this.props.modificaModal('')
                    this.props.modificaStatusModal(false)}}>
                    <View style={style.viewContainer}>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 15}}>
                            <Button
                            title='X'
                            color='#000'
                            onPress={()=>{
                                this.props.modificaModal('')
                                this.props.modificaStatusModal(false)}}/>
                        </View>
                    <LoginPage/>
                    </View>
                </Modal>
            </View>      
        : this.props.modalProp == 'Atendimento' ?
            <View>
                <Modal 
                visible={true}
                animationType={'fade'}
                onRequestClose={()=>{
                    this.props.modificaModal('')
                    this.props.modificaStatusModal(false)}}>
                    <View style={style.viewContainer}>
                    <Text>Atendimento</Text>
                    <Button
                    title='Fechar'
                    onPress={()=>{
                        this.props.modificaModal('')
                        this.props.modificaStatusModal(false)}}/>
                    
                    </View>
                </Modal>
            </View>
        : this.props.modalProp == 'Sobre' ? 
            <View>
                <Modal 
                visible={true}
                animationType={'fade'}
                onRequestClose={()=>{
                    this.props.modificaModal('')
                    this.props.modificaStatusModal(false)}}>
                    <View style={style.viewContainer}>
                    <Text>Sobre</Text>
                    <Button
                    title='Fechar'
                    onPress={()=>{
                        this.props.modificaModal('')
                        this.props.modificaStatusModal(false)}}/>
                    </View>
                </Modal>
            </View>
        : false}
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
    //Modal
    viewContainer:{
        flex: 1,
        paddingTop: 20,
        borderWidth: 1
    }
})
export default connect (mapStateToProps, actionCreators)(OpContaPage)