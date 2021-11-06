import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <div>
        <div>
            <NavLink to='/voting'>Голосование</NavLink>
        </div>
        <div>
            <NavLink to='/settings'>Настройки</NavLink>
        </div>
    </div>
}
export default Header;