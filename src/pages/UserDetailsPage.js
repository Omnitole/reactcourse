import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {UserDetails} from "../components/UsersContainer/UserDetails";
import {userService} from "../services/userService";

const UserDetailsPage = () => {

    const {userId} = useParams()

    const [user,setUser] = useState([])

    useEffect(()=>{
        userService.getById(userId).then(({data})=>setUser(data))
    },[userId])


    return (
        <div>
            {user && <UserDetails user={user}/>}
            <hr></hr>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};