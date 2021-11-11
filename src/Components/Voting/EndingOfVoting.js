import styles from "./Voting.module.css";

const EndingOfVoting = (props) => {
    return <div className={styles.block2}>
            <span>

            <h2>{props.name}</h2>
        </span>
        <img className={styles.image} alt={"Участник № " + props.id} src={props.photo}/>
        <p>{props.votes} голосов</p>
    </div>
}
export default EndingOfVoting