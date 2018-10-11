import React, {Component} from 'react';
import {createNewDeck} from '../utils/api';
import {Container, Content, Form, Item, Input, Button, Card, CardItem, Label, Body, Text} from 'native-base';
import {Alert} from "react-native";

class NewDeck extends Component {

    state = {
        title: '',
        backToHome: false
    };

    showSubmitAlert = () => {
        Alert.alert(
            'Success',
            'Your new deck has been added!',
            [{text: 'OK', onPress: () => (this.setState({backToHome: true}))}],
            {cancelable: false}
        )
    };

    handleAddDeck = async (event) => {
        event.preventDefault();

        const {title} = this.state;

        if (title === '') {
            Alert.alert(
                'Required',
                'Please fill in the Title field.'
            );

            return;
        }

        await createNewDeck({[title]: {title: title, questions: []}});

        this.setState({
            title: ''
        });

        this.showSubmitAlert();
    };

    render() {
        if (this.state.backToHome) {
            return this.props.navigation.navigate('Decks');
        }

        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                            <Form style={{alignSelf: 'stretch'}}>
                                <Item underline>
                                    <Label style={{fontWeight: "bold"}}>Title:</Label>
                                    <Input onChangeText={(text) => this.setState({title: text})}/>
                                </Item>
                                <Button primary block onPress={(event) => this.handleAddDeck(event)}>
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