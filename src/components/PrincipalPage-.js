import React,{Component} from 'react';
import {StyleSheet, View, Text,ActivityIndicator, TouchableOpacity, Button } from 'react-native';
import {connect} from 'react-redux';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
    buscaCidade,
    modificaLatitude,
    modificaLongitude,
    modificaLatDelta,
    modificaLonDelta,
    modificaUserLatitude,
    modificaUserLongitude
} from '../actions/PrincipalPageActions';

let actionCreators = {
    modificaLatitude,
    modificaLongitude,
    modificaLatDelta,
    modificaLonDelta,
    modificaUserLatitude,
    modificaUserLongitude,
    buscaCidade
};

const mapStateToProps = state => ({
    region: {
        latitude: state.PrincipalPageReducer.latitude,
        longitude: state.PrincipalPageReducer.longitude,
        latitudeDelta: state.PrincipalPageReducer.latitudeDelta,
        longitudeDelta: state.PrincipalPageReducer.longitudeDelta,
    },
    userLocation: {
        latitude: state.PrincipalPageReducer.userLatitude,
        longitude: state.PrincipalPageReducer.userLongitude,
    }
})

export class PrincipalPage extends Component{

    constructor(props){
        super(props);
    }

    attUserLocation(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.props.modificaUserLatitude(position.coords.latitude)
                this.props.modificaUserLongitude(position.coords.longitude)
                // this.marker.animateMarkerToCoordinate()
            },
            (error)=>{ console.log(error); },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        )
    }

    getInitialRegion(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.props.modificaLatitude(position.coords.latitude);
                this.props.modificaLongitude(position.coords.longitude);
                region = this.props.region;
                this.map.animateToRegion(region, 200);
            },
            (error)=>{ console.log(error); },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        )
    }

    render(){
        return(
        <View style={{flex:1}}>
            <View style={style.container}>
                <MapView
                ref={ ref => {this.map = ref;}}
                style={style.map}
                initialRegion={this.props.region}
                onMapReady={()=>{
                    this.getInitialRegion();
                }}
                loadingEnabled={true}>
                    <Marker
                    ref={(c) => {this.marker = c;}}
                    coordinate={this.props.userLocation}>
                        <View style={style.radius}>
                            <View style={style.marker}/>
                        </View>
                    </Marker>
                    <TouchableOpacity
                    style={{borderWidth:1, height: 50, width: 50, justifyContent: 'center'}}
                    onPress={()=>{
                       this.attUserLocation()
                       console.log(this.props.userLocation)
                    }}>
                    <Text>Clique!</Text>
                    </TouchableOpacity>
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
    }
});

export default connect (mapStateToProps, actionCreators)(PrincipalPage)