import { combineReducers, legacy_createStore } from "redux"
import data from "../assets/data"

//Action
export const addToCart = (options, quantity, id) => {
    return {
        type: 'addToCart',
        payload : {options, quantity, id}
    }
}

export const removeFromCart = (id) => {
    return {
        type: 'removeFromCart',
        payload : {id}
    }
}

//Reducer
const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'addToCart':
            return [...state, action.payload]
        case 'removeFromCart':
            return state.filter(el => action.payload.id !== el.id)
        default:
            return state
    }
}

const menuReducer = (state = data.menu, action) => {
    return state
}
//메뉴 데이터가 변경될 일 없음 -> state 유지되도록 리턴

//combine으로 reducer 합치기
const rootReducer = combineReducers({cartReducer, menuReducer})

//Store
export const Store = legacy_createStore(rootReducer)

//과제
