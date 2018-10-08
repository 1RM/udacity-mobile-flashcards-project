import React, {Component} from 'react';
import {getDecks} from '../utils/api';
import {Container, Content, Card, CardItem, Text, Left, Right, Button, Body} from 'native-base';

class DeckInfo extends Component {
    async componentDidMount() {
        const decks = await getDecks();

        this.setState({
            decks: decks
        });
    }

    render() {
        const deckInfo = this.props.navigation.state.params.deck;

        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem header bordered>
                            <Left>
                                <Text>{ deckInfo.title }</Text>
                            </Left>
                            <Right>
                                <Text>{ deckInfo.questions.length } Cards</Text>
                            </Right>
                        </CardItem>
                        <CardItem header bordered>
                            <Body style={{flexDirection:'row', flexWrap:'wrap', alignItems: 'center'}}>
                            <Button style={{margin: 5}} onPress={() => this.props.navigation.navigate('AddQuestion', { 'deckId': deckInfo.title})}>
                                <Text>Add Question</Text>
                            </Button>
                            <Button style={{margin: 5}}>
                                <Text>Take Quiz</Text>
                            </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default DeckInfo;