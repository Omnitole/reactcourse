import {useLoaderData} from "react-router-dom";

import {PostDetails} from "../components/PostsContainer/PostDetails";

const PostDetailsPage = () => {

    const {data:post} = useLoaderData()

    return (
        <div>
            <PostDetails post={post}/>
        </div>
    );
};

export {PostDetailsPage};