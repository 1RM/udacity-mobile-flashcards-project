import React, {Component} from 'react';
import {addCardToDeck} from '../utils/api';
import { Container, Header, Content, Form, Item, Input, Button, Card, CardItem, Label, Body, Text } from 'native-base';

class AddQuestion extends Component {

    state = {
        question: '',
        answer: '',
        backToDeck: false
    };

     handleAddQuestion = async (event) => {
        event.preventDefault();

        const {question, answer} = this.state;

        const data = await addCardToDeck({
            question: question,
            answer: answer
        }, this.props.navigation.state.params.deckId);

        console.log(data);

        this.setState({
            question: '',
            answer: '',
            backToDeck: true
        });
    };

    render() {
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                                <Form style={{alignSelf: 'stretch'}}>
                                    <Item underline>
                                        <Label>Question:</Label>
                                        <Input onChangeText={(text) => this.setState({question: text})}/>
                                    </Item>

                                    <Item underline>
                                        <Label>Answer:</Label>
                                        <Input onChangeText={(text) => this.setState({answer: text})} />
                                    </Item>

                                    <Button primary block onPress={(event) => this.handleAddQuestion(event)}>
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

export default AddQuestion;