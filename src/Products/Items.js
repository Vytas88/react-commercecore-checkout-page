import React, {useContext} from 'react';
import { CartContext } from './Cart';

const Items = ({id, img, title, price}) => {

    const {removeItem} = useContext(CartContext)
    
    return (
    <div>
        <div className="items-info">
            <div className="product-img">
                <img src={img} alt="product-image"/>
            </div>
            <div className="product-title">
                <h2>{title}</h2> 
            </div>
            <div className="product-price">
                <h3>${price}</h3> 
            </div>
            <div className="remove-item">
                <button className="remove-button" onClick={() => removeItem(id)}>x Remove</button> 
            </div>
            <hr/>

        </div>
    </div>
    )
}

export default Items