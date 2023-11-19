import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../store";
import {carValidator} from "../validators/carValidator";
import {carService} from "../services";

const CarForm = () => {

    const {reset, register, handleSubmit, setValue, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    })

    const dispatch = useDispatch()

    const {carForUpdate} = useSelector(state => state.cars);

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue]);

    const save = async (car) => {
        await carService.create(car)
        dispatch(carActions.trigger())
        reset()
    }
    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        dispatch(carActions.trigger())
        dispatch(carActions.setCarForUpdate(null))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type={"text"} placeholder={"brand"} {...register('brand')}/>
            <input type={"text"} placeholder={"price"} {...register('price', {valueAsNumber: true})}/>
            <input type={"text"} placeholder={"year"} {...register('year', {valueAsNumber: true})}/>
            <button disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>
            {errors.brand && <div>brand:{errors.brand.message}</div>}
            {errors.price && <div>brand:{errors.price.message}</div>}
            {errors.year && <div>brand:{errors.year.message}</div>}
        </form>
    );
};

export {CarForm};