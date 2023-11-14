import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {episodesService} from "../../../services";
import {Episode} from "../Episode/Episode";
import css from './Episodes.module.css'


const Episodes = () => {
    const [episodes,setEpisodes] = useState({prev:null,next:null,results:[]});

    const [query,setQuery] = useSearchParams({page:'1'});

    const page =  query.get('page')

    useEffect(()=>{
        episodesService.getAll(page).then(({data:{info:{prev,next},results}})=>setEpisodes({prev,next,results}))
    },[page])

    const prevHandler = () => {
        setQuery(prev => {
            prev.set('page',`${+page -1}`)
            return prev
        })
    }

    const nextHandler = () => {
        setQuery(prev => {
            prev.set('page',`${+page +1}`)
            return prev
        })
    }

    return (
        <div>
        <div className={css.Episodes}>
            {episodes.results.map(episode => <Episode key={episode.id} episode={episode}/>)}

        </div>
            <div className={css.Buttons}>
                <button disabled={!episodes.prev} onClick={prevHandler}>Prev</button>
                <button disabled={!episodes.next} onClick={nextHandler}>Next</button>
            </div>
        </div>
    );
};

export {Episodes};