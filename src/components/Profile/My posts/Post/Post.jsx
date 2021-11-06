import s from './Post.module.css'
const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://pbs.twimg.com/media/EZMjfibWsAYKaZh.jpg'></img>
            <span>{props.message}</span>
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>

    );
}
export default Post
//<textarea rows="5" type="text" v-model="bodyExp" />