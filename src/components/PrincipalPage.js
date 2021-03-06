import React,{Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator, TouchableOpacity, Button, TextInput, Image } from 'react-native';
import {connect} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MapView, { Marker } from 'react-native-maps';
import {TabNavigator} from './TabNavigator';
import {verificaLogin} from '../actions/LoginPageActions';
import Buscador from '../components/Buscador';
import {
    modificaReducerPrincipal
} from '../actions/PrincipalPageActions';

let actionCreators = {
    modificaReducerPrincipal,
    verificaLogin
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

const logo = require('../images/pagbus200.png');

export class PrincipalPage extends Component{

    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.verificaLogin()
    }

    attUserLocation(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.props.modificaReducerPrincipal('userLatitude',position.coords.latitude)
                this.props.modificaReducerPrincipal('userLongitude',position.coords.longitude)
                userLoc = this.props.userLocation;
                console.log('Anda')
                this.map.animateToCoordinate(userLoc, 1000)
            },
            (error)=>{ console.log(error); },
            {enableHighAccuracy: true, timeout: 1000, maximumAge: 1}
        )
    }

    getInitialRegion(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.props.modificaReducerPrincipal('latitude',position.coords.latitude);
                this.props.modificaReducerPrincipal('longitude',position.coords.longitude);
                region = this.props.region;
                this.map.animateToRegion(region, 200);
            },
            (error)=>{ console.log(error); },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        )
    }

    render(){
        return(
        <View style={{flex: 1}}>        
            <View style={{flex: 9}}>
                <View style={style.container}>
                    <MapView
                    provider={'google'}
                    // onPress={(event) => console.log(event.nativeEvent.coordinate) }
                    // onRegionChange={region=>{console.log(region)}}
                    ref={ref => this.map = ref}
                    style={style.map} 
                    initialRegion={this.props.region}
                    onMapReady={()=>{
                        this.getInitialRegion()
                        this.attUserLocation()
                    }}>
                        <Marker
                        ref={(c) => {this.marker = c;}}
                        coordinate={this.props.userLocation}>
                            <View style={style.radius}>
                                {/* <View style={style.marker}/> */}
                                <Image
                                source={logo}
                                style={style.marker}
                                />
                            </View>
                        </Marker>
                    </MapView>

                    <Buscador/>
                    
                </View>
            </View>
            <View style={{flex:1}}>
                <TabNavigator/>
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
    // marker:{
    //     height: 20,
    //     width: 20,
    //     borderWidth: 3,
    //     borderColor: 'white',
    //     borderRadius: 20 / 2,
    //     overflow: 'hidden',
    //     backgroundColor: '#007AFF'
    // },
    marker:{
        height: 35,
        width: 20,
        overflow: 'hidden'
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
    viewCentraliza:{
        height: 40,
        width: 40,
        backgroundColor: '#FFF',
        borderRadius: 50/2,
        overflow: 'hidden',
        position: 'absolute',
        top: 520,
        left: 300
    }
});

export default connect (mapStateToProps, actionCreators)(PrincipalPage)