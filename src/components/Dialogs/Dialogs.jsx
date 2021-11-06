import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validator";

const maxLength = maxLengthCreator(50);

class Dialogs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let addNewMessage = (values) => {
            this.props.sendMessage(values.newMessageBody);
        };

        let dialogsElements = this.props.dialogsPage.dialogs
            .map(d => <DialogItem
                name={d.name}
                id={d.id}
                image={d.image ? d.image : 'https://clck.ru/WWWdj'}
            />);
        let messagesElements = this.props.dialogsPage.messages
            .map(m => <Message
                id={m.id}
                message={m.message}
            />);
        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {
                        dialogsElements
                    }
                </div>
                <div>
                    <div className={s.messages}>
                        {
                            messagesElements
                        }
                    </div>
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        );
    }
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                    <Field component={Textarea} validate={[required, maxLength]} placeholder={'Enter your message'} name={"newMessageBody"}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    );
}
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)
export default Dialogs;