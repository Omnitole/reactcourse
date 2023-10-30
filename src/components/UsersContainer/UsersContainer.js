import {useEffect, useState} from "react";


import {UserForm} from "./UserForm";
import {Users} from "./Users";
import {userService} from "../../services/userService";


const UsersContainer = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        userService.getAll().then(({data})=>setUsers(data))
    },[])



    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <Users users={users} setUsers={setUsers}/>
        </div>
    );
};

export {UsersContainer};