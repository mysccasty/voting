import {updateObjectInArray} from "../utils/object-helper";

const VOTE_MINUS = "VOTE_MINUS"
const VOTE_PLUS = "VOTE_PLUS"


let initialState = {
    members: [{
        id: 0,
        name: "Жабаскрипт",
        photo: "https://clck.ru/Yg428",
        info: "Язык для будущей илиты легаси кода",
        votes: 153,
    },
    {
        id: 1,
        name: "Питон",
        photo: "https://clck.ru/Yg457",
        info: "Язык мамкиных машин лернеров",
        votes: 153,
    },],
    idOfVote: 0,
}


const votingReducer = (state = initialState, action) => {
    switch (action.type){
        case VOTE_MINUS:
            return {
                ...state,
                members: updateObjectInArray(state.members, action.memberId,
                    "id",{}, "votes", (u)=>(u-1))
            }
        case VOTE_PLUS:
            return {
                ...state,
                members: updateObjectInArray(state.members, action.memberId,
                    "id",{}, "votes", (u)=>(u+action.quantityOfVote))
            }
        default:
            return state;
    }
}
export const votePlus = (memberId, quantityOfVote) => ({type: VOTE_PLUS, memberId, quantityOfVote});
export const voteMinus = (memberId, quantityOfVote) => ({type: VOTE_MINUS, memberId, quantityOfVote});
export default votingReducer;