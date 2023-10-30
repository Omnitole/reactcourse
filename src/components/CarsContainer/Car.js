import {carService} from "../../services/carService";

const Car = ({car,setCarForUpdate,trigger}) => {

    const {id,brand,price,year} = car

    const deleteCar = async ()=>{
       await carService.deleteById(id)
        trigger()
    }

    return (
        <div>
            <div>Id -{id} </div>
            <div>brand -{brand} </div>
            <div>price -{price} </div>
            <div>year -{year} </div>
            <button onClick={()=> setCarForUpdate(car)}>Update</button>
            <button onClick={deleteCar}>Delete</button>
        </div>
    );
};

export {Car};