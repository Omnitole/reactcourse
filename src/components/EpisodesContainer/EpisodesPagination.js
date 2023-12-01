import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const EpisodesPagination = () => {

    const {prevPage, nextPage} = useSelector(state => state.episodes);
    const [, setQuery] = useSearchParams();

    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())
            return prev
        })

    }

    const next = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString())
            return prev
        })
    }

    return (
        <div>
            <button disabled={!prevPage} onClick={prev}>Previous</button>
            <button disabled={!nextPage} onClick={next}>Next</button>
        </div>
    );
};

export {EpisodesPagination};