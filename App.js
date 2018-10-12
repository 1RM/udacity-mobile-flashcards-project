import React, {Component} from 'react';
import {View} from 'react-native';
import {createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import {Font, AppLoading} from 'expo';
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

    state = {
        loading: true
    };

    /**
     * Given the use of Native Base, there are some font issues with Android devices
     * and I had to use the workaround here to get things to behave:
     * https://github.com/GeekyAnts/NativeBase/issues/1466#issuecomment-353701808
     *
     * @returns {Promise<void>}
     */
    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });

        this.setState({ loading: false });

        setLocalNotification();
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={{flex: 1}}>
                    <AppLoading />
                </View>
            );
        }

        return (
            <View style={{flex: 1}}>
                <AppNavigator />
            </View>
        );
    }
}

export default App;