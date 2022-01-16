import React, {useContext} from 'react';
import {CartContext} from './CartContext'

export const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    
    return (
        <div>
        <p>Total USD $ {totalPrice.toFixed(2) } </p>
        </div>
    )
}