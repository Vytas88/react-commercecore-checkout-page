import React, {createContext, useReducer, useEffect} from 'react';
import {products} from './Products';
import ContextCart from "./ContextCart";
import {reducer} from "./Reducer"


export const CartContext = createContext();

const initialState = {
    item:products,
    totalAmount:0,
} 

export const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    //To delete items from cart
    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        })
    }

    //Use the useEffect to update the total data
    useEffect(() => {
        dispatch({type: "GET_TOTAL"});
    },[state.item]);
 
    return (
        <CartContext.Provider value={{... state, removeItem}}>
        <ContextCart />
        </CartContext.Provider>
    )
}

export default Cart