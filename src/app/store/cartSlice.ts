
import { createSlice , PayloadAction } from "@reduxjs/toolkit"
import { ShopINT } from "../api/api-shop"

interface CartState {
    cart: ShopINT[];
    totalPrice: number;
}

const initialState: CartState = {
    cart: [],
    totalPrice: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state , action : PayloadAction<ShopINT>)=>{
            state.cart.push(action.payload);
            state.totalPrice += action.payload.price;
        },
        removeFromCart: (state , action : PayloadAction<number>)=>{
                const itemRemove = state.cart.find((item)=> item.id !== action.payload);
                if (itemRemove){
                    state.totalPrice -= itemRemove.price;
                }
                state.cart = state.cart.filter((item)=> item.id !== action.payload);
        }
    }
});


export const {addToCart , removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;