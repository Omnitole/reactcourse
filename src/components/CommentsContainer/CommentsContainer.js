import {useEffect, useState} from "react";


import {commentService} from "../../services/commentService";
import {Comments} from "./Comments";
import {CommentForm} from "./CommentForm";

const CommentsContainer = () => {
    const [comments,setComments] = useState([])

    useEffect(()=>{
        commentService.getAll().then(({data})=> setComments(data))
    },[])

    return (
        <div>
            <CommentForm setComments={setComments}/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsContainer};