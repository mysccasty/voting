const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Volodya', image: 'https://clck.ru/WWWnx'},
        {id: 2, name: 'Beer', image: 'https://clck.ru/WWWv6'},
        {id: 3, name: 'Zebra', image: ''},
        {id: 4, name: 'Pizza', image: ''},
        {id: 5, name: 'Corn', image: 'https://clck.ru/WWWxn'},
        {id: 6, name: 'Shaurma', image: ''}
    ],
    messages: [
        {id: 0, message: 'Hi'},
        {id: 1, message: 'How are you'},
        {id: 0, message: 'Fine'},
        {id: 1, message: 'Yo'},
        {id: 1, message: 'Ho'}
    ],
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {

            let body = action.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 0, message: body}],
            };
        }
        default:
            return state;
    }

}

export const sendMessage = (newMessageBody) => {

    return {
        type: SEND_MESSAGE,
        newMessageBody
    }

}
export default dialogsReducer;