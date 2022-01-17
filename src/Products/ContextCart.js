import React, {useContext} from 'react';
import Items from "./Items";
import {CartContext} from "./Cart";

const ContextCart = () => {
    const {item} = useContext(CartContext);

    return (
        <div>
            <div className="cart-items">
                <div className="cart-items-container">
                    {
                    item.map((curItem) =>{
                        return <Items key={curItem.id} {...curItem}/>
                    })
                    }

                    <div className="card-total">
                        <h3>Total USD <span>$48.99</span></h3>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ContextCart

