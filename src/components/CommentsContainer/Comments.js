import {useEffect, useState} from "react";

import {commentService} from "../../services/commentService";
import {Comment} from "./Comment";

const Comments = ({postId:id}) => {


    const [comments,setComments] = useState([])

    useEffect(()=>{
        commentService.getByPostId(id).then(({data})=>setComments(data))
    },[id])

    return (
        <div>
            {
                comments.map(comment=><Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};