import s from "./ProfileInfo.module.css"
import Preloader from "../../Common/Preloader/Preloader";
import user from "../../../assets/images/user.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(
            ()=>{setEditMode(false);})
    }
    return (
        <div>
            <div>
                <img
                    src='https://png.pngtree.com/thumb_back/fw800/background/20190813/pngtree-oktoberfest-background-with-glasses-of-beer-border-and-blue-rhombuses-image_290539.jpg'/>
            </div>

            <div className={s.descriptionBlock}>
                <img className={s.userPhoto} src={profile.photos.large ? profile.photos.large : user}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <div><b>Status</b>: <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
                {editMode ?
                    <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
                    <ProfileData profile={profile} isOwner={isOwner}
                                 goToEditMode={() => {
                                     setEditMode(true)
                                 }}/>}

            </div>
        </div>
    );
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}:</b> {contactValue}
    </div>
}
const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div>
            <b>Full name:</b> {profile.fullName}
        </div>
        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob && <div>
            <b>My professional skills:</b> {profile.lookingForAJobDescription}
        </div>}
        <div>
            <b>About me:</b> {profile.aboutMe}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => (
            <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        ))}
        </div>
    </div>
}
export default ProfileInfo;