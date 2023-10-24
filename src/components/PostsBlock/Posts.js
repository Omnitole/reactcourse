import {useEffect, useState} from "react";


import {postService} from "../services/postService";
import {Post} from "./Post";
import {PostDetails} from "./PostDetails";

const Posts = () => {

    const getId = async (id) => {
        const {data} = await postService.getById(id);
        setPostDetails(data)
    }
    const [posts,setPosts] = useState([]);
    const [postDetails,setPostDetails] = useState(null);
    useEffect(()=> {
        postService.getAll().then(({data}) => setPosts(data))
    },[])


    return (
        <div>
            <div>
                {
                    postDetails && <PostDetails postDetails={postDetails}/>
                }
            </div>
            <div>
                {
                    posts.map(post => <Post key={post.id} post={post} getId={getId}/>)
                }
            </div>

        </div>
    );
};

export {Posts};