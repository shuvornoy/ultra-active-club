import React from 'react';
import './Cart.css';
import logo from '../../images/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Cart = ({cart}) => {
    const diffToast = () =>{
        toast.success('Successfully toasted!')
    }

    let total = 0;

    for(const developer of cart){
        total = total + developer.time;
    }

    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        // 👇️ toggle shown state
        setIsShown(current => !current);
    
        // 👇️ or simply set it to true
        // setIsShown(true);
      };

    return (
        <div className='cart'>
            <div className='cart-logo'>
            <div className='logo'>
            <img src={logo} alt="" />
            <h3>Shuvo Roy</h3>
            </div>
                <p>Hi i am Shuvo roy, i am a programming hero student. Studying diploma in Engineering CSE. My hobby coding.</p>
            </div>

            <div className='cart-hight'>
                <div><h3>53<small>kg</small></h3><p>Weight</p></div>
                <div><h3>5.5</h3><p>Height</p></div>
                <div><h3>20<small>yrs</small></h3><p>Age</p></div>
            </div>

                <h3>Add A Break</h3>
                <div className='cart-break'>
                    <button onClick={handleClick}>10s</button>
                    


            </div>

            <h3>Exercise Details</h3>
            <div className='cart-time'>
                <h4>Exercise time: {total} seconds</h4>
            </div>
            <div className='cart-time'>
                <h4>Break time:{isShown} seconds</h4>
            </div>
            <button onClick={diffToast} className='cart-activity'>
                <p>Activity Completed</p>
            </button>
            <ToastContainer
            position="top-center"
            reverseOrder={false}
             />
        </div>
    );
};

    
export default Cart;