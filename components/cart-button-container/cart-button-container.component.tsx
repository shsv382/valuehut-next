import React from 'react';
import Image from 'next/image';
import './cart-button-container.module.scss';

const CartButtonContainer: React.FC = () => {
    return (
        <div className='cart-button-container' data-fc-id="minicart" >
            <a href={`https://valuehut.foxycart.com/cart?cart=view`}>
                <Image src="/basket_12.svg" width={27} height={27} />
                <span className="cart-quantity" data-fc-id="minicart-quantity">0</span>
            </a>
        </div>
    )
}

export default CartButtonContainer;