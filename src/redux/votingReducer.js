import {maxInArray, updateObjectInArray} from "../utils/object-helper";

const UPDATE_VOTES = "UPDATE_VOTES"
const PAUSE_TIMER = "PAUSE_TIMER"
const CREATE_RESULT = "CREATE_RESULT";

let initialState = {
    members: [{
        id: 0,
        name: "Жабаскрипт",
        photo: "https://clck.ru/Yg428",
        info: "Язык для будущей илиты легаси кода",
        votes: 0,
    },
    {
        id: 1,
        name: "Питон",
        photo: "https://clck.ru/Yg457",
        info: "Язык мамкиных машин лернеров",
        votes: 0,
    },
    {
        id: 2,
        name: "Кресты",
        photo: "https://clck.ru/YmYVE",
        info: "Говно",
        votes: 0,
    }
    ],
    themeOfVoting: "Лучший язык погромиста",
    idOfVote: 0,
    quantityOfVote: 1,
    timeOfVoting: 10,
    isTimerPaused: false,
    winner: [],
    isEnd: false,
}


const votingReducer = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_VOTES:
            return {
                ...state,
                members: updateObjectInArray(state.members, action.memberId,
                    "id",{votes: action.votes},)
            }
        case PAUSE_TIMER:
            return {
                ...state,
                isTimerPaused: !state.isTimerPaused,
            }
        case CREATE_RESULT:
            return {
                ...state,
                isEnd: true,
                winner: maxInArray(state.members, "votes", "id"),
            }
        default:
            return state;
    }
}
export const updateVotes = (memberId, votes) => ({type: UPDATE_VOTES, memberId, votes});
export const pauseTimer = () => ({type:PAUSE_TIMER});
export const createResult = () => ({type: CREATE_RESULT});
export default votingReducer;