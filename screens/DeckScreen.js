import React, { Component } from 'react';
import { Text, View, Platform, Image } from 'react-native';

import { connect } from 'react-redux';
import { Card, Button, Icon } from 'react-native-elements';
import Swipe from '../components/Swipe';
import Player from '../components/Player';
import SwagTitle from '../components/SwagTitle';
import * as actions from '../actions';
import { COURTS } from '../data/data';
import { BOARD, BOARD_BORDER, HEIGHT } from '../data/Size';

class DeckScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    header: (
        <SwagTitle
          title={'COURTS'}
        />
      )
  })

  renderNoMoreCards() {
    return (
      <Card title="Sorry! There are no more games today! Come back next time!"
        titleStyle={{
          color:'orange',
          borderBottomWidth: 0,
        }}

        wrapperStyle={{
          borderBottomWidth: 0,
          borderWidth: 0
        }}
        containerStyle={
        {
          backgroundColor: 'rgba(0, 0, 0, 1)', borderColor: 'rgba(255, 255, 255, 1)', borderRadius: 10, color: 'orange',  marginTop: 250
        }
      }
      >

      </Card>
    );
  }

  renderCard(players) {
    const deconstructPlayers = (players) => {

    return players.map((player, position) =>
    <Player player={player} key={position}/>

    )};

    return (
      <Card containerStyle={
        {
          backgroundColor: 'rgba(0, 0, 0, 1)', borderColor: 'orange', borderRadius: 10
        }
      }>
        <View style={{
        width: BOARD,
        height: BOARD,
        borderWidth: BOARD_BORDER,
        borderColor: 'black',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>
        {deconstructPlayers(players)}
        </View>
      </Card>
    );
  }


  render() {
    return (
      <Image source={{uri: `http://3.bp.blogspot.com/-GKttXVDxpfo/UFIyuiwmzqI/AAAAAAAAAO8/woQPagNlT-A/s1600/BasketBall+Court.jpg`}} style={styles.backgroundImage} >
            <View style={{ marginTop: 15, backgroundColor: 'transparent' }}>
              <Swipe
                keyProp='jobkey'
                data={COURTS}
                renderCard={this.renderCard}
                renderNoMoreCards={this.renderNoMoreCards.bind(this)}
                onSwipeRight={()=> this.props.navigation.navigate('final')}

              />

          </View>

    </Image>
    );
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  backgroundImage: {
    flex: 1,
   width: null,
   height: null,
   resizeMode: 'cover'
 }
};


export default DeckScreen;
