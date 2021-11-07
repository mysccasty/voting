import styles from "./VotingMember.module.css"

const VoteMember = (props) => {
    const quantityOfVote = 1;
    const onVoteMinus = () => {
        props.voteMinus(props.id, quantityOfVote);
    };
    const onVotePlus = () => {
        props.votePlus(props.id, quantityOfVote);
    };
    return <div className={props.id ? styles.block1 : styles.block2}>
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
            <p>
                {props.votes}
            </p>
            <button onClick={onVotePlus}>+1 голос</button>
        </div>
    </div>

}
export default VoteMember;
