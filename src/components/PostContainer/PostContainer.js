import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services/postsService";
import {Post} from "./Post";

const PostContainer = () => {

    const {state:id} = useLocation()

    const [post,setPost] = useState(null)

    useEffect(()=>{
            postsService.getById(id).then(({data})=>setPost(data))
        })

    return (
        <div>
            {post && <Post key={post.id} post={post}/>}
        </div>
    );
};

export {PostContainer};