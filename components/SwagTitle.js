import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Font} from 'expo';

class SwagTitle extends Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({nyb: require('../assets/fonts/nyb.ttf')});
    this.setState({fontLoaded: true});
  }

  render() {
    return (<View
      style={{backgroundColor: 'black', height: 50, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderColor: 'orange', paddingVertical: 10 }}
      >
      {
    this.state.fontLoaded ? (
      <Text style={{ fontFamily: 'nyb', fontSize: 20, color: 'orange', paddingTop: 10 }}>
        {this.props.title}
      </Text>
    ) : null
  }
    </View>);
  }
}

export default SwagTitle;
