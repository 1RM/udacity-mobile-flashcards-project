import React, {Component} from 'react';
import {View, Stylesheet, Text} from 'react-native';
import {saveDeckTitle} from '../utils/api';

class NewDeck extends Component {

    async componentDidMount() {

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>New Deck View</Text>
            </View>
        )
    }
}

export default NewDeck;