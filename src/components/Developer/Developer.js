import React from 'react';
import './Developer.css'

const Developer = (props) => {
    const {img, name, job, time, age, details} = props.developer;
    // const {handelAddToCart} = props;
    return (
        <div className='developer'>
            <img src={img} alt="" />
            <div className='developer-info'>
            <p className='developer-name'>{name}</p>
            <p>Job: {job}</p>
            <p><small>For Age: {age}</small></p>
            <p><small>Time required: {time}s</small></p>
            </div>
            <button onClick={()=>props.handelAddToCart(props.developer)} className='developer-btn'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Developer;