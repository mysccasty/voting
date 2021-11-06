const VoteMember = (props) => {
    return <div>
        <span>
            <h1>{props.name}</h1>
        </span>
        <img alt={"Участник № "+props.id} src={props.photo}/>
        <span>
            <h3>{props.info}</h3>
        </span>
        <span>
            <p>
                {props.quantity}
            </p>
        </span>
    </div>

}
export default VoteMember;