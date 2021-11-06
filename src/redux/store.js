import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state : {
        profilePage : {
            posts : [
                {id: 1, message: 'Hi,how are you', likesCount: 12},
                {id: 2, message: 'My 1st project', likesCount: 11},
            ],
            newPostText: 'hello',
        },
        dialogsPage: {
            dialogs : [
                {id: 1, name: 'Volodya', image: 'https://clck.ru/WWWnx'},
                {id: 2, name: 'Beer', image: 'https://clck.ru/WWWv6'},
                {id: 3, name: 'Zebra', image: ''},
                {id: 4, name: 'Pizza', image: ''},
                {id: 5, name: 'Corn', image: 'https://clck.ru/WWWxn'},
                {id: 6, name: 'Shaurma', image:''}
            ],
            messages : [
                {id: 0, message: 'Hi'},
                {id: 1, message: 'How are you'},
                {id: 0, message: 'Fine'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Ho'}
            ],
            newMessageBody : '',
        },
        sidebar:{
            friends: ['Andrew', 'Alex', 'Ann']
        },
    },
    _callSubscriber(){
        console.log('State changed');
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this.getState());
    },

}


export default store;