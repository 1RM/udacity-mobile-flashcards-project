import {AsyncStorage} from 'react-native';
import {Notifications, Permissions} from 'expo';

export const DECK_STORAGE_KEY = 'mobile-flashcards:deck';
export const NOTIFICATION_KEY = 'mobile-flashcards:notification';


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

export function createNewDeck(deck) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck));
}

export function addCardToDeck(card, deckId) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            let decks = JSON.parse(results);

            decks[deckId].questions.push(card);

            AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
                [deckId]: {
                    title: deckId,
                    questions: decks[deckId].questions
                }
            }));
        });
}

export function clearLocalNotifications() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync());
}

export function createNotification() {
    return {
        title: 'Take A Quiz!',
        body: "Don't forget to study your flashcards and take a quiz today to test your knowledge!",
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data == null) {
                Permissions.askAsync(Permissions.Notifications)
                    .then(({status}) => {
                       if (status === 'granted') {
                           Notifications.cancelAllScheduledNotificationsAsync();

                           let tomorrow = new Date();
                           tomorrow.setDate(tomorrow.getDate() + 1);
                           tomorrow.setHours(17);
                           tomorrow.setMinutes(0);

                           Notifications.scheduleLocalNotificationAsync(
                               createNotification(),
                               {
                                   time: tomorrow,
                                   repeat: 'day'
                               }
                           );

                           AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                       }
                    });
            }
        })
}