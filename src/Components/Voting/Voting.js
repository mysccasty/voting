import VoteMember from "./VoteMember";
import {connect} from "react-redux";
import {compose} from "redux";
import {createResult, pauseTimer, updateVotes} from "../../redux/votingReducer";
import styles from "./Voting.module.css"
import Timer from "./Timer";
import { useState} from "react";
import useInterval from "../../utils/useInterval";
import EndingOfVoting from "./EndingOfVoting";
//расширить до нескольких голосований
const Voting = ({members, quantityOfVote, updateVotes, time, pauseTimer, isTimerPaused, ...props}) => {
    let [timeLeft, setTimeLeft] = useState(time);
    useInterval(() => {
        if (timeLeft === 0) {
            props.createResult();
        }
        setTimeLeft(timeLeft - 1)
    }, isTimerPaused ? null : 1000, props.isEnd);
    const onEndTimer = () => {
        setTimeLeft(0);
        props.createResult();
    }
    return (<div className={styles.table}>
            Голосование:<h1>{props.themeOfVoting}</h1>
            {!props.isEnd && <div>
                {members.map(u => (
                    <VoteMember
                        updateVotes={updateVotes} quantityOfVote={quantityOfVote} key={u.id} {...u}/>
                ))}
                <div className={styles.timer}>
                    <Timer
                        minute={(timeLeft - (timeLeft % 60)) / 60}
                        seconds={timeLeft % 60}
                        pauseTimer={pauseTimer}
                        endTimer={props.endTimer}
                    />
                    <button onClick={onEndTimer}>Остановить голосование</button>
                </div>
            </div>
            }
            {/*вынести в отдельную компоненту, сделать возможность нескольких победителей, добавить графики, плавная смена голосования на победителей, сделать мини иконки для остальных участников*/}
            {props.isEnd && props.winner.length &&
                <div> <p>Победил {props.winner.length} участник</p>
                    {props.winner.map(u => (<EndingOfVoting id={u.id} votes={u.votes} name={u.name} photo={u.photo}/>))}
                </div>

            }
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        members: state.voting.members,
        quantityOfVote: state.voting.quantityOfVote,
        time: state.voting.timeOfVoting,
        isTimerPaused: state.voting.isTimerPaused,
        winner: state.voting.winner,
        isEnd: state.voting.isEnd,
        themeOfVoting: state.voting.themeOfVoting,
    }
}
export default compose(connect(mapStateToProps, {updateVotes, pauseTimer, createResult}))(Voting);