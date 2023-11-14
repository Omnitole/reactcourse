import './Header.modules.css';
import {useChapter} from "../../hooks";

const Header = () => {

    const {chapter} = useChapter();

    return (
        <div className={"Header"}>
            {
                chapter ?
                    <h1>{chapter}</h1>
                    :
                    <h1>Rick and Morty</h1>
            }
        </div>
    );
};

export {Header};