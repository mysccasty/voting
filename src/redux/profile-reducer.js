import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS= "SAVE_PHOTO_SUCCESS";

let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you', likesCount: 12},
        {id: 2, message: 'My 1st project', likesCount: 11},
    ],
    profile: null,
    isFetching: true,
    status: ""
}

const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            };
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }

}
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const addPost = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }

}
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }

}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }

}
export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    }

}
export const getUserProfile = (userId) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await profileAPI.getProfile(userId);
    dispatch(toggleIsFetching(false));
    dispatch(setUserProfile(data));

}
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));

}
export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }

}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }

}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }

}
export default profileReducer;