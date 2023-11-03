import {useParams} from "react-router-dom";

import {Posts} from "../components/PostsContainer/Posts";


const PostsPage = () => {
    const {userId} = useParams()
    return (
        <div>
            <Posts userId={userId}/>
        </div>
    );
};

export {PostsPage};