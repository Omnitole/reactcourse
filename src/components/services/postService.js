import {jsonPlaceholderService} from "./jsonPlaceholderService";
import {urls} from "../../constants/urls";


const postService = {
    getAll: () => jsonPlaceholderService.get(urls.posts.base),
    getById: (id) => jsonPlaceholderService.get(urls.posts.byId(id))
}

export {postService}