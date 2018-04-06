import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Util = require('../Util/Util');


export default props => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, marginBottom: 2, borderRadius: 5 / 2 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 2.5 }}>
            {props.tipoMov === 'C' ?
                <MaterialIcons name='add' size={12} color='rgba(0,20,120,1)' /> :
                <MaterialIcons name='remove' size={12} color='rgba(120,20,0,1)' />}
        </View>
        <View style={{ flex: 1, padding: 2.5 }}>
            <Text>{props.dtMov}</Text>
        </View>
        <View style={{ flex: 1, padding: 2.5 }}>
            <Text>{props.desc}</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end', padding: 2.5 }}>
            <Text>{props.valor}</Text>
        </View>
    </View>
)