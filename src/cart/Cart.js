import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const cart = props.courses

  let  total = 0 
    for (let i = 0; i < cart.length; i++) {
        let fees = cart[i];
        total = total + fees.price
       
    }
     
    return (
        <div className="cart">
           <h4 className="total-added">Total Course added {cart.length}</h4> <br/>
             
             <h5  className="total"    >Total amount   <strong>{total}</strong>  tk</h5>
        </div>
    );
};

export default Cart;