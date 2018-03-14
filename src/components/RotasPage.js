import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import MapView, { Marker, Polygon } from 'react-native-maps';
import { modificaReducerRotas, addPoint } from '../actions/RotasPageActions';

const actionCreators = {
    modificaReducerRotas,
    addPoint
}

const mapStateToProps = state => ({
    region: {
        latitude: state.PrincipalPageReducer.latitude,
        longitude: state.PrincipalPageReducer.longitude,
        latitudeDelta: state.PrincipalPageReducer.latitudeDelta,
        longitudeDelta: state.PrincipalPageReducer.longitudeDelta,
    },
    marcador: state.RotasPageReducer.marcador,
    editando: state.RotasPageReducer.editando
})

let id = 0;

export class RotasPage extends Component {

    encerrar(props){
        props.modificaReducerRotas('marcador', []);
        props.modificaReducerRotas('editando', false);
    }
    iniciarDesenho(props){
        props.modificaReducerRotas('editando', true);
    }
    salvar(props){ 
    }


    render() {
        console.log(this.props)
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 9 }}>
                    <View style={style.container}>
                        <MapView
                            provider={'google'}
                            ref={ref => this.map = ref}
                            onPress={(event) => this.props.addPoint(event.nativeEvent.coordinate)}
                            style={style.map}
                            initialRegion={this.props.region}
                            onMapReady={() => this.map.animateToRegion(this.props.region, 200)}
                        >
                            {this.props.marcador.length == 0 ?
                                false
                                :
                                <MapView.Polyline
                                    strokeWidth={4}
                                    coordinates={this.props.marcador.map(p => p.coords)}
                                />}
                            
                        </MapView>
                    </View>
                </View>
                <View style={{flex:1, borderTopWidth:1, backgroundColor: '#FFF', flexDirection: 'row'}}>
                    <TouchableOpacity 
                    onPress={()=>this.iniciarDesenho(this.props)}
                    style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                        <Text
                        style={{color: this.props.editando ? '#CCC' : '#000'}}
                        >INICIAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>this.encerrar(this.props)}
                    style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                        <Text
                        style={{color: this.props.editando ? '#000' : '#CCC'}}
                        >ENCERRAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                        <Text 
                        style={{color: this.props.editando ? '#000' : '#CCC'}}>SALVAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    map: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute'
    },
    radius: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,122,255,0.1)',
        borderWidth: 1,
        borderColor: 'rgba(0,122,255,0.3)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    marker: {
        height: 20,
        width: 20,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 20 / 2,
        overflow: 'hidden',
        backgroundColor: '#007AFF'
    },
    containerLoading: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    viewFlutuante: {
        height: 50,
        width: 300,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
export default connect(mapStateToProps, actionCreators)(RotasPage)