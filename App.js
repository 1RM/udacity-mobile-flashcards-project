import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Decks from './src/components/Decks';
import NewDeck from './src/components/NewDeck';
// import Question from './src/components/Question';
// import Quiz from './src/components/Quiz';
import { MaterialTopTabBar } from 'react-navigation-tabs';
import { Constants } from 'expo';

const HEADER_HEIGHT = 64;

function MaterialTopTabBarWithStatusBar(props) {
    return (
        <View
            style={{
                paddingTop: Constants.statusBarHeight,
                backgroundColor: '#2196f3',
            }}
        >
            <MaterialTopTabBar {...props} jumpToIndex={() => {}} />
        </View>
    );
}

const styles = StyleSheet.create({
    stackHeader: {
        height: HEADER_HEIGHT,
    },
    tab: {
        height: HEADER_HEIGHT,
    },
});

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
    },
    {
        tabBarComponent: MaterialTopTabBarWithStatusBar,
        tabBarOptions: {
            tabStyle: styles.tab,
        },
    }

);

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