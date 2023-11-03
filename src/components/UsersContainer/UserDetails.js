import {useNavigate} from "react-router-dom";

const UserDetails = ({user}) => {

    const navigate = useNavigate()

    const {id,name,email,username,phone,website} = user
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>username:{username}</div>
            <div>phone:{phone}</div>
            <div>website:{website}</div>
            <button onClick={()=>navigate('posts')}>Show posts</button>
        </div>
    );
};

export {UserDetails};