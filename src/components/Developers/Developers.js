import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Developers.css'

const Developers = () => {
    const [developers, setDevelopers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setDevelopers(data))
    },[]);

    const handelAddToCart = (developer) =>{
        console.log(developer)
        const newCart = [...cart, developer];
        setCart(newCart);
    }

    return (
        <div className='container'>
            <div className="developers-container">
              {
                developers.map(developer => <Developer 
                    key={developer.id}
                    developer = {developer}
                    handelAddToCart = {handelAddToCart}
                    ></Developer>)
              }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Developers;