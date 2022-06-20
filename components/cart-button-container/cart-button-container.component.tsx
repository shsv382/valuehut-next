import React from 'react';
import './cart-button-container.module.scss';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Cart } from './basket_12.svg';

const CartButtonContainer: React.FC = () => {
    return (
        <div className='cart-button-container' data-fc-id="minicart" >
            <a href={`https://valuehut.foxycart.com/cart?cart=view`}>
                <Cart />
                <span className="cart-quantity" data-fc-id="minicart-quantity">0</span>
            </a>
        </div>
    )
}

export default CartButtonContainer;