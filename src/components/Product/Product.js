import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const { product, handleAddToCart } = props
    const { name, img, seller, price, ratings } = product;

    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className="products-info">
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>

                <div className="products-rating">
                    <p>Seller: <small>{seller}</small></p>
                    <p>Rating: <small>{ratings}</small> stars</p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(product)} className='addToCartBtn'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;