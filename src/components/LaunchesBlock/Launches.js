import {useEffect, useState} from "react";
import {launchesService} from "../services/launchesService";
import {Launch} from "./Launch";

const Launches = () => {

    const [launches,setLaunches] = useState([])

    useEffect(()=> {
        launchesService.getAll().then(({data}) => setLaunches(data))
    })

    return (
        <div>
            {
                launches.filter(value => value.launch_year !== "2020").map(launch => <Launch key={launch.mission_name} launch={launch}/>)
            }
        </div>
    );
};

export {Launches};