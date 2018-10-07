import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import Decks from './src/components/Decks';
import NewDeck from './src/components/NewDeck';
// import Question from './src/components/Question';
// import Quiz from './src/components/Quiz';

const Tabs = createBottomTabNavigator({
    Decks: {
        screen: Decks
    },
    NewDeck: {
        screen: NewDeck
    },
});

// const Tabs = createBottomTabNavigator({
//         DeckList: {
//             screen: Deck,
//             navigationOptions: {
//                 tabBarLabel: 'All Decks'
//             },
//         },
//         NewDeck: {
//             screen: Deck,
//             navigationOptions: {
//                 tabBarLabel: 'New Deck',
//             },
//         },
//     }
// );

// const AppNavigator = createStackNavigator({
//     Home: {
//         screen: Tabs,
//         navigationOptions: {title: 'Home'},
//     },
//     // IndividualDeck: {
//     //     screen: Deck,
//     //     navigationOptions: {
//     //         headerTintColor: '#000',
//     //     },
//     // },
//     // Quiz: {
//     //     screen: Quiz,
//     //     navigationOptions: {
//     //         title: 'Quiz',
//     //         headerTintColor: '#000',
//     //     },
//     // },
//     // NewQuestion: {
//     //     screen: Question,
//     //     navigationOptions: {
//     //         title: 'Add Question',
//     //         headerTintColor: '#000',
//     //     },
//     // },
// });

class App extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <View style={{flex: 1}}><Tabs/></View>

        );
    }
}

export default App;