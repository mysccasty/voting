import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";

const  Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         saveProfile={props.saveProfile}
            />
            <MyPostsContainer/>
        </div>
    );
}
export default Profile