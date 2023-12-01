import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {characterActions} from "../../redux";
import {Character} from "./Character";

const Characters = () => {

    const {ids} = useParams()
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);


    useEffect(() => {
        dispatch(characterActions.getByIds({ids}))
    }, [ids,dispatch])

    return (
        <div>
            {
                characters.map(character => <Character key={character.id} character={character}/>)
            }
        </div>
    );
};

export {Characters};