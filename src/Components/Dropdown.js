import {useState} from "react";


function Dropdown() {
    const [isActive, setIsActive] = useState(false);
    return(
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}> <img src={"./Icons/ShoppingCart.svg"} />ORDER SUMMARY >
            </div>
            {isActive && (
            <div className="dropdown-content">
                <div className="dropdown-item">Products</div>
            </div>
            )}
        </div>
    )
}

export default Dropdown