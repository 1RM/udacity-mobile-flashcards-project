import React, {Component} from 'react';
import {getDecks} from '../utils/api';
import { Container, Header, Content, Card, CardItem, Body, Text, Left, Right } from 'native-base';

class Decks extends Component {

    state = {
        decks: []
    };

    async componentDidMount() {
        const decks = await getDecks();

        this.setState({
            decks: decks
        });
    }

    /**
     * Need this so that when we route back to this component
     * from `NewDeck` component, the deck information
     * will be re-fetched from Asyncstorage.
     *
     * @returns {Promise<void>}
     */
    async componentWillUpdate() {
        const decks = await getDecks();

        this.setState({
            decks: decks
        });
    }

    render() {
        const decks = this.state.decks;

        if (decks) {
            return (
                <Container>
                    <Content padder>
                        {
                            Object.keys(decks).map((deckId) => {
                                return <Card key={deckId}>
                                    <CardItem button={true} bordered onPress={() => this.props.navigation.navigate('DeckInfo', { 'deckId': deckId})}>
                                        <Left>
                                            <Text>{ decks[deckId].title }</Text>
                                        </Left>
                                        <Right>
                                            <Text>{ decks[deckId].questions.length } Cards</Text>
                                        </Right>
                                    </CardItem>
                                </Card>;
                            })
                        }
                    </Content>
                </Container>
            )
        } else {
            return (
                <Container />
            );
        }
    }
}

export default Decks;