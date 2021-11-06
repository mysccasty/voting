import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../Common/FormsControls/FormsControls";


const MyPosts = React.memo(props => {
    let postsElements = props.profilePage.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {
                    postsElements
                }
            </div>
        </div>
    );
})

let maxLength = maxLengthCreator(10)
const AddNewPostForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[required, maxLength]} component={Textarea} name={"newPostText"} placeholder={"Input text"}/>
        </div>
        <div>
            <button>Add post</button>
        </div>

    </form>)
}
const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"}) (AddNewPostForm)
export default MyPosts
