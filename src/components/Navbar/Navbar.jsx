import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
/*const Friend = (props) =>{
    return(
        <div className={s.friend}>
            <img src={'https://s01.yapfiles.ru/files/1411905/13921767027735_yapfiles.ru.png'}></img>
            {props.name}
        </div>
    )
}*/
const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={`${s.item} ${s.activeLink}`}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>

            {/*<h1 className={s.title}>Friends</h1>
            <div className={s.friends}>
                {props.sidebar.friends.map(w => <Friend name={w}/>)}
            </div>*/}
        </nav>
    );
}
export default Navbar;