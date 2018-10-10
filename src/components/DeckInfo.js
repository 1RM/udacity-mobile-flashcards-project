import React, {Component} from 'react';
import {getDecks} from '../utils/api';
import {Container, Content, Card, CardItem, Text, Left, Right, Button, Body} from 'native-base';

class DeckInfo extends Component {

    state = {
        decks: {},
        isReady: false
    };

    async componentDidMount() {
        const decks = await getDecks();

        this.setState({
            decks: decks
        });
    };

    /**
     * Need this so that when we route back to this component
     * from `AddQuestion` component, the deck information
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
        const deckId = this.props.navigation.state.params.deckId;

        if (Object.keys(decks).length > 0) {
            return (
                <Container>
                    <Content padder>
                        <Card>
                            <CardItem header bordered>
                                <Left>
                                    <Text>{decks[deckId].title}</Text>
                                </Left>
                                <Right>
                                    <Text>{decks[deckId].questions.length} Cards</Text>
                                </Right>
                            </CardItem>
                            <CardItem header bordered>
                                <Body style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
                                <Button style={{margin: 5}}
                                        onPress={() => this.props.navigation.navigate('NewQuestion', {'deckId': deckId})}>
                                    <Text>New Question</Text>
                                </Button>
                                <Button style={{margin: 5}}
                                        onPress={() => this.props.navigation.navigate('Quiz', {'deckInfo': decks[deckId]})}>
                                    <Text>Take Quiz</Text>
                                </Button>
                                </Body>
                            </CardItem>
                        </Card>
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

export default DeckInfo;