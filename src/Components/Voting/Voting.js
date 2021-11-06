import VoteMember from "./VoteMember";

const Voting = (props) => {
    return <div>
        {props.members.map( u => (
            <VoteMember {...props}/>
        ))}
    </div>
}
export default Voting;