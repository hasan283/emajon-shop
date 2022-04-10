import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products);
    const handleRemoveToCart = product => {
        const rest = cart.filter(products => products.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)
    }
    return (
        <div className='review-container'>
            <div className="review-product">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveToCart={handleRemoveToCart}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link className='link' to="/shipment">
                        <button className='cart-btn'>
                            <p>Proceed Shipping</p>
                            <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;