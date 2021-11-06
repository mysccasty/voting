import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://drasler.ru/wp-content/uploads/2019/08/Картинка-кружка-пива-026.jpg'></img>

            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div>
                        {props.login} - <button onClick={props.logout}>Log out</button>
                    </div>:
                <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}
export default Header;