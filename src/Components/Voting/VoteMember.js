import styles from "./VotingMember.module.css"
import {useEffect, useState} from "react";

const VoteMember = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [votes, setVotes] = useState(props.votes)
    useEffect(() => {
        setVotes(props.votes);
    }, [props.votes]);
    const activateEditMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateVotes(props.id, votes);
    };
    const onVotesChange = (e) => {
        setVotes(e.target.value);
    }
    const onVoteMinus = () => {
        props.updateVotes(props.id, votes-props.quantityOfVote);
    };
    const onVotePlus = () => {
        props.updateVotes(props.id, votes+props.quantityOfVote);
    };
    return <div className={props.id % 2 !== 0 ? styles.block1 : styles.block2}>
        <span>
            <p>Участник № {props.id+1}</p>
            <h2>{props.name}</h2>
        </span>
        <img className={styles.image} alt={"Участник № "+props.id} src={props.photo}/>
        <span>
            <p>{props.info}</p>
        </span>
        <div className={styles.voting}>
            <button onClick={onVoteMinus}>-1 голос</button>
            {!editMode && <p onDoubleClick={activateEditMode} >
                {votes}
            </p>}
            {editMode && <input type={"number"} autoFocus={true} value={votes} onBlur={deactivateEditMode} onChange={onVotesChange}/>
            }
            <button onClick={onVotePlus}>+1 голос</button>
        </div>
    </div>

}
export default VoteMember;
