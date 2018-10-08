import React, {Component} from 'react';
import {getDecks} from '../utils/api';
import { Container, Header, Content, Card, CardItem, Body, Text, Left, Right } from 'native-base';

class Decks extends Component {

    state = {
        decks: {}
    };

    async componentDidMount() {
        const decks = await getDecks();

        // console.log(decks);

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
                            Object.keys(decks).map((key) => {

                                return <Card key={key}>
                                    <CardItem button={true} bordered>
                                        <Left>
                                            <Text>{ decks[key].title }</Text>
                                        </Left>
                                        <Right>
                                            <Text>{ decks[key].questions.length } Cards</Text>
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
                <Container/>
            );
        }


    }
}

export default Decks;