import {spaceXService} from "./spaceXService";
import {urls} from "../../constants/urls";


const launchesService = {
    getAll: () => spaceXService.get(urls.launches.base)
}

export {launchesService}