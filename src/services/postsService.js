import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postsService = {
    getById:(id)=> axiosService.get(urls.posts.byId(id))
}

export {postsService}