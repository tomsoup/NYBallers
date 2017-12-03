import React, { Component } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import SwagTitle from '../components/SwagTitle';
import { FormLabel, FormInput, Button, Icon} from 'react-native-elements'
import { connect } from 'react-redux';
import * as actions from '../actions';
import {Font} from 'expo';

class FinalScreen extends Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({lobster: require('../assets/fonts/lobster.ttf')});
    this.setState({fontLoaded: true});
  }

  static navigationOptions = ({navigation}) => ({
    header: (
        <SwagTitle
          title={'TIME TO BALL'}
        />
      )
  })

  render() {
    const FONTSIZE = 24
    const { container } = styles;
    return (
      <View style={container}>
        <Image
          source={require('../assets/img/basketball.png')}
        />
        {
      this.state.fontLoaded ? (
        <Text style={{ fontFamily: 'lobster', fontSize: FONTSIZE, color: 'orange', paddingTop: 10 }}>
          GOOD LUCK
        </Text>
      ) : null
    }
    {
  this.state.fontLoaded ? (
    <Text style={{ fontFamily: 'lobster', fontSize: FONTSIZE, color: 'orange', paddingTop: 10 }}>
      &
    </Text>
  ) : null
}
{
this.state.fontLoaded ? (
<Text style={{ fontFamily: 'lobster', fontSize: FONTSIZE, color: 'orange', paddingTop: 10 }}>
HAVE FUN
</Text>
) : null
}
{
this.state.fontLoaded ? (
<Text style={{ fontFamily: 'lobster', fontSize: FONTSIZE, color: 'orange', paddingTop: 10 }}>
  {this.props.name.toUpperCase()} !
</Text>
) : null
}

      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
};

const mapStateToProps = ({ name }) => {

  return { name: name.name };
};

export default connect(mapStateToProps, actions)(FinalScreen);
