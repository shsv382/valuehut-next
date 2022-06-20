import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { clearItemFromCart } from "../../redux/cart/cart.actions";

import './cart-item.module.scss';

const CartItem = ({ item }) => {
    const {imageUrl, price, title, quantity} = item;
    const dispatch = useAppDispatch();
    return (
        <div className='cart-item'>
            <div className='item-details'>
                <span className='name'>{title}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
            <div className="cart-item__remove" onClick={() => dispatch(clearItemFromCart(item))}>
                <span className="cart-item__remove-x">&#215; </span>
                <span className="cart-item__remove-d">remove</span>
            </div>
        </div>
    )
}

export default React.memo(CartItem);