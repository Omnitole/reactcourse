import {useNavigate} from "react-router-dom";

import {Characters} from "../components";
import {useChapter} from "../hooks";

const CharactersPage = () => {

    const navigate = useNavigate()

    const {setChapter} = useChapter();

    const back = () => {
        setChapter(null)
        navigate(-1)
    }

    return (
        <div>
            <button onClick={back}>Back</button>
            <Characters/>
        </div>
    );
};

export {CharactersPage};