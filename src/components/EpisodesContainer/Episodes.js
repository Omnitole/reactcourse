import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Episode} from "./Episode";
import {episodeActions} from "../../redux";

const Episodes = ({page}) => {

    const {episodes} = useSelector(state => state.episodes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(episodeActions.getAll(page))
    }, [page,dispatch])

    return (
        <div>
            {
                episodes.map(episode => <Episode key={episode.id} episode={episode}/>)
            }
        </div>
    );
};

export {Episodes};