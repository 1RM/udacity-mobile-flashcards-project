import React, {Component} from 'react';
import {Container, Content, Card, CardItem, Text, Left, Right, Button, Body} from 'native-base';

class Quiz extends Component {

    state = {
        correctAnswers: 0,
        questionIndex: 0,
        showingAnswer: false
    };

    handleCorrectAnswer = () => {
        this.setState({
            questionIndex: this.state.questionIndex + 1,
            correctAnswers: this.state.correctAnswers + 1,
            showingAnswer: false
        });
    };

    handleIncorrectAnswer = () => {
        this.setState({
            questionIndex: this.state.questionIndex + 1,
            showingAnswer: false
        });
    };

    handleShowAnswer = () => {
        this.setState({
            showingAnswer: true
        });
    };

    handleShowQuestion = () => {
        this.setState({
            showingAnswer: false
        });
    };

    handleRestartQuiz = () => {
        this.setState({
            correctAnswers: 0,
            questionIndex: 0,
            showingAnswer: false
        });
    };

    render() {
        const deckInfo = this.props.navigation.state.params.deckInfo;
        const totalQuestions = deckInfo.questions.length;

        return (
            <Container>
                {
                    (totalQuestions > this.state.questionIndex) ? (
                            <Content padder>
                                <Card>
                                    <CardItem header bordered>
                                        <Left>
                                            <Text style={{fontWeight: "bold"}}>{deckInfo.title}</Text>
                                        </Left>
                                        <Right>
                                            <Text>Question {this.state.questionIndex + 1} of {totalQuestions}</Text>
                                        </Right>
                                    </CardItem>
                                    <CardItem header bordered>
                                        { (this.state.showingAnswer === false) ? (
                                            <Body style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                                                <Text>{deckInfo.questions[this.state.questionIndex].question}</Text>
                                            </Body>
                                        ) : (
                                            <Body style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                                                <Text>{deckInfo.questions[this.state.questionIndex].answer}</Text>
                                            </Body>
                                        )}
                                    </CardItem>
                                    <CardItem header bordered>
                                        { (this.state.showingAnswer === false) ? (
                                            <Body style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                                                <Text style={{color: 'red'}} onPress={() => {this.handleShowAnswer()}}>Show Answer</Text>
                                            </Body>
                                        ) : (
                                            <Body style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                                                <Text style={{color: 'red'}} onPress={() => {this.handleShowQuestion()}}>Show Question</Text>
                                            </Body>
                                        )}
                                    </CardItem>



                                    <CardItem header bordered>
                                        <Body style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                                            <Button success style={{margin: 5}}
                                                    onPress={() => { this.handleCorrectAnswer() }}>
                                                <Text>Correct</Text>
                                            </Button>
                                            <Button danger style={{margin: 5}}
                                                    onPress={() => { this.handleIncorrectAnswer() }}>
                                                <Text>Incorrect</Text>
                                            </Button>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </Content>
                        ) : (
                            <Content padder>
                                <Card>
                                    <CardItem header bordered>
                                        <Left>
                                            <Text style={{fontWeight: "bold"}}>{deckInfo.title}</Text>
                                        </Left>
                                    </CardItem>
                                    <CardItem header bordered>
                                        <Body>
                                            <Text>Score: { ((this.state.correctAnswers / totalQuestions) * 100).toFixed() }%</Text>
                                            <Text>You answered {this.state.correctAnswers} of {totalQuestions} correct.</Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem header bordered>
                                        <Button primary style={{margin: 5}}
                                                onPress={() => { this.handleRestartQuiz() }}>
                                            <Text>Restart Quiz</Text>
                                        </Button>
                                        <Button primary style={{margin: 5}}
                                                onPress={() => this.props.navigation.navigate('Decks')}>
                                            <Text>Back to Home</Text>
                                        </Button>
                                    </CardItem>
                                </Card>
                            </Content>
                        )
                }
            </Container>
        );
    }
}

export default Quiz;