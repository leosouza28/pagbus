import React,{Component} from 'react';
import {StyleSheet, View, Text,ActivityIndicator, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {modificaLatitude,modificaLongitude,modifica_lat_delta,modifica_lon_delta} from '../actions/PrincipalPageActions';

let actionCreators = {
    modificaLatitude,
    modificaLongitude,
    modifica_lat_delta,
    modifica_lon_delta
};

const mapStateToProps = state => ({
    latitude: state.PrincipalPageReducer.latitude,
    longitude: state.PrincipalPageReducer.longitude,
    latitudeDelta: state.PrincipalPageReducer.latitudeDelta,
    longitudeDelta: state.PrincipalPageReducer.longitudeDelta
})

export class PrincipalPage extends Component{

    getLocation(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.props.modificaLatitude(position.coords.latitude)
                this.props.modificaLongitude(position.coords.longitude)
            },
            (error)=>{ console.log(error) },
            {enableHighAccuracy: true, timeout: 20000, maximumAge:1000}
        )
    }
    getCoords(e){
        console.log(e.nativeEvent)
    }

    componentDidMount(){
        this.getLocation()
    }

    render(){
        return(
        <View style={{flex:1}}>
            <View style={style.container}>
                <MapView
                provider={PROVIDER_GOOGLE}
                style={style.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                loadingEnabled={true}>
                
                    <Marker
                    onPress={e => this.getCoords(e)}
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}>
                        <View style={style.radius}>
                            <View style={style.marker}/>
                        </View>
                    </Marker>
                </MapView> 
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