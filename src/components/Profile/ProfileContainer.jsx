import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";

class  ProfileContainer extends React.Component{

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }

        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) this.refreshProfile();
    }

    render() {

        return <>
                {this.props.isFetching ?
                <Preloader/> : null}
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         savePhoto={this.props.savePhoto}
                         profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         saveProfile={this.props.saveProfile}
                />
        </>
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isFetching: state.isFetching,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps,{saveProfile, getUserProfile, getUserStatus, savePhoto, updateStatus: updateUserStatus}),
    withRouter
) (ProfileContainer);
