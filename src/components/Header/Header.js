import {useSelector} from "react-redux";

import './Header.modules.css'


const Header = () => {

    const {currentEpisode} = useSelector(state => state.episodes)

    return (
        <div className={"Header"}>
            {
                currentEpisode ?
                    <h1>{currentEpisode}</h1>
                    :
                    <h1>Rick and Morty</h1>
            }
        </div>
    );
};

export {Header};