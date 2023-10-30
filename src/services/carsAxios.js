import axios from "axios";


import {baseURLCars} from "../constants/urls";

const carsAxios = axios.create({baseURL:baseURLCars})

export {carsAxios}