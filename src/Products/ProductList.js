import React from 'react';
import {Product} from './Product';


export const ProductList = () => {
    const database = [
        {photo: './Icons/product1.svg', name: "3x CoreProduct®", price: 39.99, id:1},
        {photo: './Icons/product2.jpg', name: "1x Extra CoreProduct®", price: 9.99, id:2},
    ]

    return(
        <div>
        {
            database.map(item => (
                <div key={item.id} >
                <img src={item.photo} /> 
                <Product name={item.name} price={item.price} />
                </div>
                
            ))
        }
        </div>
    )
}
// $