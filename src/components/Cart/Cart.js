import React from 'react';
import './Cart.css';
import logo from '../../images/logo.png'

const Cart = ({cart}) => {

    let total = 0;

    for(const developer of cart){
        total = total + developer.time;
    }

    return (
        <div className='cart'>
            <div className='cart-logo'>
            <img src={logo} alt="" />
            <div className='cart-info'>
                <h3>Shuvo Roy</h3>
                <p>i am a developer</p>
            </div>
            </div>

            <div className='cart-hight'>
                <div><h3>53<small>kg</small></h3><p>Weight</p></div>
                <div><h3>5.5</h3><p>Height</p></div>
                <div><h3>75<small>yrs</small></h3><p>Age</p></div>
            </div>

            <div>
                <h2>Add A Break</h2>
                <div className='cart-break'>
                    <button>10s</button>
                    {/* <button onClick={handelClick}>10s</button>
                    <button onClick={handelClick}>10s</button>
                    <button onClick={handelClick}>10s</button> */}
                </div>
            </div>

            <h3>Exercise Details</h3>
            <div className='cart-time'>
                <h4>Exercise time: {total} seconds</h4>
            </div>
            <div className='cart-time'>
                <h4>Break time: seconds</h4>
            </div>
            <button className='cart-activity'>
                <p>Activity Completed</p>
            </button>
        </div>
    );
};

export default Cart;