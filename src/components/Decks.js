import React, {Component} from 'react';
import {View, Stylesheet, Text} from 'react-native';
import {getDecks} from '../utils/api';

class Decks extends Component {

    state = {
        decks: []
    };

    async componentDidMount() {
        const decks = await getDecks();

        console.log(decks);

        this.setState({
            decks: decks
        });
    }

    render() {
        return (
            <View>
                <Text>Decks View</Text>
            </View>
        )
    }
}

export default Decks;