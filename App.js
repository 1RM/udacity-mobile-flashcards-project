import React, {Component} from 'react';
import { View } from 'react-native';
import {createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import Decks from './src/components/Decks';
import NewDeck from './src/components/NewDeck';
import DeckInfo from './src/components/DeckInfo';
import NewQuestion from './src/components/NewQuestion';
import Quiz from './src/components/Quiz';
import {setLocalNotification} from "./src/utils/api";

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
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            title: 'Quiz',
            headerTintColor: '#000',
        },
    },
    NewQuestion: {
        screen: NewQuestion,
        navigationOptions: {
            title: 'New Question',
            headerTintColor: '#000',
        },
    },
});

class App extends Component {

    componentDidMount() {
        setLocalNotification();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <AppNavigator/>
            </View>
        );
    }
}

export default App;