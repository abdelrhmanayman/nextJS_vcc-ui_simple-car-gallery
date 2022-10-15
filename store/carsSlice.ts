import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { Car } from "@/shared/interfaces/car.interface";

export interface CarsState {
    selectedCar: Car | null;
}

const initialState: CarsState = {
    selectedCar: null,
};


export const carsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        setSelectedCar(state: { selectedCar: Car | null; }, action: PayloadAction<any>) {
            state.selectedCar = action.payload;
        },

        extraReducers: {
            [HYDRATE]:  (state: any, action: { payload: { cars: any; }; }) => {
                return {
                    ...state,
                    ...action.payload.cars,
                };
            },
        },

    },
} as any);

export const { setSelectedCar } = carsSlice.actions;

export const selectCarsState = (state: AppState) => (state as any).cars.selectedCar;

export default carsSlice.reducer;