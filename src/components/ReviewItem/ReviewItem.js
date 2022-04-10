import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { product, handleRemoveToCart } = props;
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className="review-container">
            <div className='review-item'>
                <div className="review-product">
                    <div className="product">
                        <img src={img} alt="" />
                    </div>
                    <div className="product-info">
                        {/* <h5>{name.length > 20 ? name.slice(0, 20) : name}</h5> */}
                        <h5>{name}</h5>
                        <p><b>Price:</b> ${price}</p>
                        <p><b>Shipping:</b> ${shipping}</p>
                        <p><b>Quantity:</b> ${quantity}</p>
                    </div>
                    <div className="delete-icon">
                        <button onClick={() => handleRemoveToCart(product)}>
                            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;