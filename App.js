import React from 'react';
import { Font } from 'expo';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import store from './store';
import DeckScreen from './screens/DeckScreen';
import FinalScreen from './screens/FinalScreen';
import QuestionScreen from './screens/QuestionScreen';

export default class App extends React.Component {

  render() {
    console.disableYellowBox = true;
    const MainNavigator = StackNavigator({

      question: { screen: QuestionScreen },
      deck: { screen: DeckScreen },
      final: {
        screen: FinalScreen
      },

    }, {
      lazyLoad: true,
      navigationOptions: {
        tabBarVisible: false
      }
    });

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
