import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const commentService = {
    getByPostId:(id)=> axiosService.get(urls.comments.byPostId(id))
}

export {commentService}