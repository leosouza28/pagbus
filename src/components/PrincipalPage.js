import React,{Component} from 'react';
import {StyleSheet, View, Text,ActivityIndicator, TouchableOpacity, Button } from 'react-native';
import {connect} from 'react-redux';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
    buscaCidade,
    modificaLatitude,
    modificaLongitude,
    modifica_lat_delta,
    modifica_lon_delta} from '../actions/PrincipalPageActions';

let actionCreators = {
    modificaLatitude,
    modificaLongitude,
    modifica_lat_delta,
    modifica_lon_delta,
    buscaCidade
    
};

const mapStateToProps = state => ({
    region: {
        latitude: state.PrincipalPageReducer.latitude,
        longitude: state.PrincipalPageReducer.longitude,
        latitudeDelta: state.PrincipalPageReducer.latitudeDelta,
        longitudeDelta: state.PrincipalPageReducer.longitudeDelta,
    },
})

export class PrincipalPage extends Component{

    constructor(props){
        super(props);
    }

    getLocation(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.props.modificaLatitude(position.coords.latitude);
                this.props.modificaLongitude(position.coords.longitude);
                
                region = this.props.region;
                this.map.animateToRegion(region, 200);

            },
            (error)=>{ console.log(error); },
            {enableHighAccuracy: true, timeout: 20000, maximumAge:1000}
        )
    }

    render(){
        console.log(this.props);
        return(
        <View style={{flex:1}}>
            <View style={style.container}>
                <MapView
                // provider={PROVIDER_GOOGLE}
                ref={ ref => {this.map = ref;}}
                style={style.map}
                initialRegion={this.props.region}
                onMapReady={()=>{
                    setInterval(()=>{this.getLocation()}, 3000);
                    
                }}
                loadingEnabled={true}
                >
                    <Marker
                    coordinate={this.props.region}>
                        <View style={style.radius}>
                            <View style={style.marker}/>
                        </View>
                    </Marker>
                </MapView> 

                <View style={{flex:1, borderWidth: 1,borderColor: 'red'}}>
                    <Button
                    title='Buscar!'
                    onPress={()=>{
                        this.props.buscaCidade(this.props);
                    }}
                    />
                </View>
            </View>
        </View>
        )
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F5FCFF'
    },
    map:{
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute'
    },
    radius:{
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
    marker:{
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
    btnLocation:{
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'white',
        height: 25,
        width: 25,
        borderRadius: 20,
        position: 'absolute',
    }
});

export default connect (mapStateToProps, actionCreators)(PrincipalPage)