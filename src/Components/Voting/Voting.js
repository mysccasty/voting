import VoteMember from "./VoteMember";
import {connect} from "react-redux";
import {compose} from "redux";
import {votePlus, voteMinus} from "../../redux/votingReducer";
import styles from "./Voting.module.css"

const Voting = ({members, idOfVote, votePlus, voteMinus}) => {
    return <div className={styles.table}>
        <h1>Голосование № {idOfVote+1}</h1>
        {members.map( u => (
            <VoteMember votePlus={votePlus} voteMinus={voteMinus} key={u.id} {...u}/>
        ))}
    </div>
}
let mapStateToProps = (state) => {
    return {
        members: state.voting.members,
        idOfVote: state.voting.idOfVote,
    }
}
export default compose(connect(mapStateToProps, {votePlus, voteMinus}))(Voting);