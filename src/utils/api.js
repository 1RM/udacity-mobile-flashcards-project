import {AsyncStorage} from 'react-native';

export const DECK_STORAGE_KEY = 'mobile-flashcards:deck';

let data = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces',
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event',
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.',
            }
        ]
    }
};

export function getDecks() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            if (!results) {
                AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
                return data;
            } else {
                return JSON.parse(results);
            }
        });
}

export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(title));
}

export function addCardToDeck({card, deckId}) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            const decks = JSON.parse(results);

            AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
                [deckId]: {title: deckId, questions: decks[deckId].questions.push(card)}
            }));
        });
}