import React, {Component} from 'react';
// import {} from 'react-native';
import {saveDeckTitle} from '../utils/api';
import { Container, Header, Content, Form, Item, Input, Button, Card, CardItem, Label, Body, Text } from 'native-base';

class NewDeck extends Component {

    async componentDidMount() {

    }

    render() {



        return (
            <Container>
                <Content padder>
                    <Card >
                        <CardItem>
                            <Body>
                                <Form style={{alignSelf: 'stretch'}}>

                                    <Item underline>
                                        <Label>New Deck Title:</Label>
                                        <Input />
                                    </Item>
                                    <Button primary block>
                                        <Text>Submit</Text>
                                    </Button>

                                </Form>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default NewDeck;