import {useNavigate} from "react-router-dom";

const Post = ({post}) => {

    const navigate = useNavigate()


    const {id,title} = post
    return (
        <div>
            <div>{title}</div>
            <button onClick={()=>navigate(`${id}`)}>View post</button>
        </div>
    );
};

export {Post};