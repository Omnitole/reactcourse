import {useEffect, useState} from "react";

import {postService} from "../../services/postService";
import {Post} from "./Post";

const Posts = ({userId:id}) => {

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
          postService.getByUserId(id).then(({data})=> setPosts(data))
        },[id])

    return (
        <div>
            {
                posts.map(post=><Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {Posts};