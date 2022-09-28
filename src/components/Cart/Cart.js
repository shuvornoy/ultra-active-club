import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    let total = 0;

    for(const developer of cart){
        total = total + developer.time;
    }
    return (
        <div className='cart'>
            <h2>Shuvo Roy</h2>
                <p>Exercise time: {total} seconds</p>
        </div>
    );
};

export default Cart;