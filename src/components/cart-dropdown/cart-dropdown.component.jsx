import React from 'react'

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss'

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div calssName ='cart-items'>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
)

export default CartDropdown