import profileReducer, {addPost, deletePost} from "./profile-reducer";
let state={
    posts : [
        {id: 1, message: 'Hi,how are you', likesCount: 12},
        {id: 2, message: 'My 1st project', likesCount: 11},
    ],
    profile: null,
    isFetching: true,
    status: ""
}
it('length of posts should be incremented', () => {
    //1. test data
    let action = addPost("Hi, everybody");

    //2. action
    let newState = profileReducer(state,action);

    //3.expectation
    expect(newState.posts.length).toBe(3);
})
it('message of post should be correct', () => {
    //1. test data
    let action = addPost("Hi, everybody");
    //2. action
    let newState = profileReducer(state,action);

    //3.expectation
    expect(newState.posts[2].message).toBe("Hi, everybody");
})
it('after deleting length of messages should be decrement', () => {
    //1. test data
    let action = deletePost(1);
    //2. action
    let newState = profileReducer(state,action);

    //3.expectation

    expect(newState.posts.length).toBe(1);
})
it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    //1. test data
    let action = deletePost(1000);
    //2. action
    let newState = profileReducer(state,action);

    //3.expectation

    expect(newState.posts.length).toBe(2);
})