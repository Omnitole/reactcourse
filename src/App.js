import {UsersContainer} from "./components/UsersContainer/UsersContainer";
import {CommentsContainer} from "./components/CommentsContainer/CommentsContainer";
import {CarsContainer} from "./components/CarsContainer/CarsContainer";

const App = () => {
    return (
        <div>
            <CarsContainer/>
            <UsersContainer/>
            <CommentsContainer/>
        </div>
    );
};

export {App};