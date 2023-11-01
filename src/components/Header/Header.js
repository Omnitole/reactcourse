import {NavLink} from "react-router-dom";


import css from './Header.modules.css'


const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'todos'}>Todos</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={'Comments'}>Comments</NavLink>
        </div>
    );
};

export {Header};