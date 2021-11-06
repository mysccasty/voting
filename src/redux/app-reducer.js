import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
    globalError: null,
}

const appReducer = (state = initialState, action) => {


    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }

        }

        default:
            return state;
    }

}

export const initializedSuccess = (userId, email, login, isAuth) =>
    ({type: INITIALIZED_SUCCESS, payload: {userId, email, login, isAuth}});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(()=>{
        dispatch(initializedSuccess)
    })
}

export default appReducer;