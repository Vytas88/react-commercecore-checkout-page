import React, {useContext} from 'react';
import {CartContext} from './CartContext'

export const Product = (props) => {
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        const product = {name: props.name, price: props.price}
        setCart(currentState => [...currentState, product]);
    }

    const removeProduct = id => {
        setCart(cart.filter(item => item.id !==id))
    }

    return(
        <div>
        <p>{props.photo}{props.name}{props.price}</p>
        <button onClick={addToCart}>Add to cart</button>
        <button onClick={removeProduct}>x Remove</button>
        <hr/>
        </div>
    )
}