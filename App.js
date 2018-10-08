import React, {Component} from 'react';
import { View } from 'react-native';
import {createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import Decks from './src/components/Decks';
import NewDeck from './src/components/NewDeck';
import DeckInfo from './src/components/DeckInfo';
import AddQuestion from './src/components/AddQuestion';
// import Quiz from './src/components/Quiz';

const Tabs = createMaterialTopTabNavigator(
    {
        Decks: {
            screen: Decks,
            navigationOptions: {
                tabBarLabel: 'Decks'
            }
        },
        NewDeck: {
            screen: NewDeck,
            navigationOptions: {
                tabBarLabel: 'New Deck'
            }
        },
    }
);

const AppNavigator = createStackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {title: 'Mobile Flashcards'},
    },
    DeckInfo: {
        screen: DeckInfo,
        navigationOptions: {
            headerTintColor: '#000',
        },
    },
    // Quiz: {
    //     screen: Quiz,
    //     navigationOptions: {
    //         title: 'Quiz',
    //         headerTintColor: '#000',
    //     },
    // },
    AddQuestion: {
        screen: AddQuestion,
        navigationOptions: {
            title: 'Add Question',
            headerTintColor: '#000',
        },
    },
});

class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <AppNavigator/>
            </View>
        );
    }
}

export default App;