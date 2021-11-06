import s from './../Dialogs.module.css';


const Message = (props) => {
    return(
        <div className={ props.id ? s.message : s.useractive}>
            <div className={props.id ? s.d2 : s.d1}></div>
            {props.message}
        </div>
    );
}
export default Message;