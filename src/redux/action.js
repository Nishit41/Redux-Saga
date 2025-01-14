import { type } from "@testing-library/user-event/dist/type"
import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./constant"

export const addToCart = (data) => {
    console.warn("action is called", data)
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeToCart = () => {
    console.warn("remove")
    return{
        type: REMOVE_TO_CART,
    }
} 


export const emptyCart = () => {
    console.warn("remove")
    return{
        type: EMPTY_CART,
    }
} 

