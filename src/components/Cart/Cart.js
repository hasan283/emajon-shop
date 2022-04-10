import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const { cart } = props;


    let totalPrice = 0;
    let shippingPrice = 0;
    let productQuantity = 0;
    for (const product of cart) {
        productQuantity = productQuantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        shippingPrice = shippingPrice + product.shipping * product.quantity;
    }

    const tax = parseFloat((totalPrice * 0.1).toFixed(2));
    const grandTotal = totalPrice + shippingPrice + tax;

    // Remove Product From Cart 
    // const removeFromCart = id => {
    //     removeFromDb(id)
    // }

    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <p>Selected Items: <b>{productQuantity}</b></p>
            <p>Total Price: <b>${totalPrice}</b></p>
            <p>Total Shipping Charge: <b>${shippingPrice}</b></p>
            <p>Tax: <b>${tax}</b></p>
            <p>Grand Total: <b>${grandTotal}</b> </p>
            {props.children}
            {/* <div className="cart-btns">
                <div className="cart-btn-one">
                    <button className='cart-btn'>
                        <p>Clear Cart</p>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>
                <div className="cart-btn-two">
                    <button className='cart-btn'>
                        <p>Review Order</p>
                        <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
                    </button>
                </div>
            </div> */}
        </div>
    );
};

export default Cart;