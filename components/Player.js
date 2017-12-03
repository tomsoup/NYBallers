import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { CELL_SIZE } from '../data/Size';

const Player = ({ player }) => {

    return (
        <View
          style={{
            width: CELL_SIZE,
            height: CELL_SIZE,
            flexDirection: 'column',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 13,
            borderWidth: 1,
            borderColor: 'black'

          }}
        >
            <Image
              style={{width: 125, height: 125, }}
              source={{uri: `${player.image}`}}
            />
          <View>
            <Text style={{ textAlign: 'center', color: 'orange'}}> {`Name: ${player.name} `}</Text>
            <Text style={{ textAlign: 'center', color: 'orange'}}>{`Age: ${player.age} `}</Text>
          </View>
        </View>
    );
};


export default Player;
