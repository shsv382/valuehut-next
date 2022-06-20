import React from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { Link } from "next/link";

import CartItem from '../cart-item/cart-item.component';
import { cartStringify } from '../../redux/cart/cart.utils';

import './cart-dropdown.module.scss';

const CartDropdown = () => {
    const cartItems = useAppSelector((state) => state.cart.cartItems);
    const dispatch = useAppDispatch();

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                { 
                    cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                    ) : (
                    <span className='empty-message'>Your cart is empty</span>
                    )
                }
            </div>
            { 
                cartItems.length ? 
                <a 
                    href={`https://valuehut.foxycart.com/cart?${cartStringify(cartItems)}`} 
                    target="_blank" 
                    className="button button-primary button-primary-small"
                >
                    GO TO CHECKOUT
                </a> : null
            }
        </div>
    )
}

export default CartDropdown;