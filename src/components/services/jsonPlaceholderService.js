import axios from "axios";
import {baseUrlJsonPlaceholder} from "../../constants/urls";


const jsonPlaceholderService = axios.create({baseURL: baseUrlJsonPlaceholder})

export {jsonPlaceholderService}