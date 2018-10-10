import React, {Component} from 'react';
import {Alert} from 'react-native';
import {addCardToDeck} from '../utils/api';
import {Container, Content, Form, Item, Input, Button, Card, CardItem, Label, Body, Text} from 'native-base';

class NewQuestion extends Component {

    state = {
        question: '',
        answer: '',
        backToDeck: false
    };

    showSubmitAlert = () => {
        Alert.alert(
            'Success',
            'Your new question has been added!',
            [{text: 'OK', onPress: () => (this.setState({backToDeck: true}))}],
            {cancelable: false}
        )
    };

    handleNewQuestion = async (event) => {
        event.preventDefault();

        const {question, answer} = this.state;

        if (question === '') {
            Alert.alert(
                'Required',
                'Please fill in the Question field.'
            );

            return;
        }

        if (answer === '') {
            Alert.alert(
                'Required',
                'Please fill in the Answer field.'
            );

            return;
        }

        await addCardToDeck({
            question: question,
            answer: answer
        }, this.props.navigation.state.params.deckId);

        this.setState({
            question: '',
            answer: ''
        });

        this.showSubmitAlert();
    };

    render() {
        const deckId = this.props.navigation.state.params.deckId;

        if (this.state.backToDeck) {
            return this.props.navigation.navigate('DeckInfo', {'deckId': deckId});
        }

        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                            <Form style={{alignSelf: 'stretch'}}>
                                <Item underline>
                                    <Label style={{fontWeight: "bold"}}>Question:</Label>
                                    <Input onChangeText={(text) => this.setState({question: text})}/>
                                </Item>

                                <Item underline>
                                    <Label style={{fontWeight: "bold"}}>Answer:</Label>
                                    <Input onChangeText={(text) => this.setState({answer: text})}/>
                                </Item>

                                <Button primary block onPress={(event) => this.handleNewQuestion(event)}>
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

export default NewQuestion;