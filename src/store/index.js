
import { configureStore } from "@reduxjs/toolkit";
import { addCar, changeSearchTerm, removeCar, carsReducer } from "./slices/carsSlice";
import { formReducer , changeName , changeCost } from "./slices/formSlice";

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
});
export  {
    store,
    changeSearchTerm,
    changeName,
    changeCost,
    addCar,
    removeCar
}; 