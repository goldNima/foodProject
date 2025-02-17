"use client"

import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"

export const store  = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export type RoorState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;