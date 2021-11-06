import Header from "./Components/Header/Header";
import Config from "./Components/Config/Config";
import Voting from "./Components/Voting/Voting";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return <div>
        <BrowserRouter>
            <Header />
            <Route path={'/config'} render={Config} />
            <Route path={'/voting'} render={Voting} />
        </BrowserRouter>
    </div>
}
export default App