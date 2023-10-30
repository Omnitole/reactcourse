import {carsAxios} from "./carsAxios";
import {urls} from "../constants/urls";

const carService = {
    getAll:()=> carsAxios.get(urls.cars.base),
    create:(car) => carsAxios.post(urls.cars.base, car),
    updateById:(id,data) => carsAxios.put(urls.cars.byId(id), data),
    deleteById:(id)=> carsAxios.delete(urls.cars.byId(id))
}

export {carService}