const Timer = ({minute, seconds, pauseTimer}) => {
    const onPauseTimer = () => {
        pauseTimer();
    }
    return <div>
        <div>
            <p>До конца голосования осталось:</p>
            {minute} : {seconds < 10? '0' + seconds: seconds}
        </div>
        <button onClick={onPauseTimer}>Пауза</button>
        {/*кнопка останавливающая голосование*/}

    </div>
}
export default Timer;