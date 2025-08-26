import data from "../assets/data"
import { configureStore, createSlice } from "@reduxjs/toolkit"

export const menuSlice = createSlice({
    name: 'menu',
    initialState: data.menu,
    reducers:{
    }
})
//상태 변경 없기 때문에 reducers 비워놓고 사용

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers:{
        addToCart(state, action) {return [...state, action.payload]},
        removeFromCart(state, action) {return state.filter(el => action.payload !== el.id)}
    }
})
//createSlice를 사용하여 만든 action creater에 인자를 전달하면 
//인자들은 payload라는 이름으로 들어옴

export const store = configureStore({
    reducer: {
        menu: menuSlice.reducer,
        cart: cartSlice.reducer
    }
})

