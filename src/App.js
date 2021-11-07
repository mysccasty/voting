import Header from "./Components/Header/Header";
import Config from "./Components/Config/Config";
import {Route} from "react-router-dom";
import VotingContainer from "./Components/Voting/Voting";
import React from "react";

const App = (props) => {
    return <div>
        <Header/>
        <Route path={'/config'} render={() => Config}/>
        <Route path={'/voting'} render={() => <VotingContainer/>}/>
    </div>
}
export default App