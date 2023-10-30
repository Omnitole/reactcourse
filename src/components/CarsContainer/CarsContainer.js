import {useEffect, useState} from "react";


import {carService} from "../../services/carService";
import {Cars} from "./Cars";
import {CarsForm} from "./CarsForm";

const CarsContainer = () => {
    const [cars,setCars] = useState([])
    const [flag,setFlag] = useState(true)
    const [carForUpdate,setCarForUpdate] = useState(null)

    const trigger = ()=>{
        setFlag(prev => !prev)
    }


    useEffect(()=>{
        carService.getAll().then(({data})=>setCars(data))
    },[flag])

    return (
        <div>
            <CarsForm trigger={trigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} trigger={trigger}/>
        </div>
    );
};

export {CarsContainer};