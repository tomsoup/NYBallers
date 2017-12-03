import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import SwagTitle from '../components/SwagTitle';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { connect } from 'react-redux';
import * as actions from '../actions';
import {Font} from 'expo';

class QuestionScreen extends Component {

  state = {
    fontLoaded: false,
    name: '',
    age: ''
  };

  async componentDidMount() {
    await Font.loadAsync({nyb: require('../assets/fonts/nyb.ttf')});
    this.setState({fontLoaded: true});
  }
  static navigationOptions = ({navigation}) => ({
    header: (
        <SwagTitle
          title={'INFO'}
        />
      )
  })

  render() {
    const { container } = styles;
    return (
      <View style={container}>
            {
          this.state.fontLoaded ? (
            <FormLabel labelStyle={{color: 'orange', fontFamily: 'nyb', paddingTop: 10, fontSize: 24}} containerStyle={{
              borderBottomColor: 'orange'
            }}>
              NAME
            </FormLabel>
          ) : null
        }
        <FormInput inputStyle={{color: 'orange', width: 180, textAlign: 'center', borderBottomColor: 'orange'}} containerStyle={{ borderColor: 'orange'}}  onChangeText={(name) => this.setState({name})}/>
        {
      this.state.fontLoaded ? (
        <FormLabel labelStyle={{color: 'orange', fontFamily: 'nyb', paddingTop: 10, fontSize: 24}}>
          AGE
        </FormLabel>
      ) : null
    }

        <FormInput inputStyle={{color: 'orange', width: 180, textAlign: 'center'}} containerStyle={{borderColor: 'orange'}}
        onChangeText={(age) => this.setState({age})}/>
        {
      this.state.fontLoaded ? (
        <Button
          buttonStyle={{
            marginTop: 50,
            borderRadius: 10,
            backgroundColor: 'orange', paddingTop: 10,
            height: 50
          }}
          onPress={() => {
            this.props.getName(this.state.name, () => {
              this.props.navigation.navigate('deck')
        });


          }}
          fontFamily={'nyb'}
          raised
          title='SUBMIT'
        />
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
  return { name};
};

export default connect(mapStateToProps, actions)(QuestionScreen);
