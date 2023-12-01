import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

import {episodeActions} from "../redux";
import {Episodes, EpisodesPagination} from "../components";

const EpisodesPage = () => {

    const [query, setQuery] = useSearchParams();
    const page = query.get('page')
    const dispatch = useDispatch();
    useEffect(() => {
        if (!page) {
            setQuery({page: '1'})
        }
        dispatch(episodeActions.setCurrent({currentEpisode: null}))

    })

    return (
        <div>
            <Episodes page={page}/>
            <EpisodesPagination/>
        </div>
    );
};

export {EpisodesPage};