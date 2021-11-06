import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, {Component, lazy} from "react";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))

class App extends Component {
    catchAllUnhandledErrors = (reason, promise) =>{
        alert("some error occurred");
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {
        if (this.props.initialized) return <Preloader/>
        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/'
                        render={<Redirect to={'/profile'}/>}/>
                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)
                               }
                        />
                        <Route path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path={'/users'}
                               render={withSuspense(UsersContainer)}/>
                        <Route path={'/login'}
                               render={() => <Login/>}/>
                        <Route path={'*'} render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

export const MainApp = (props) => {

    return <BrowserRouter /*basename={process.env.PUBLIC_URL}*/>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}