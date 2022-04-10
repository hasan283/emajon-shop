import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import './Shop.css'

const Shop = () => {

    // Display Set Product 
    const [products, setProducts] = useProducts();


    useEffect(() => {
        const storedCart = getStoredCart();
        const saveProduct = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveProduct.push(addedProduct);
            }
        }
        setCart(saveProduct);
    }, [products])

    // Handle Add To Cart Button
    const [cart, setCart] = useState([]);
    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    // Handle Display Product Show
    return (
        <div className='shop-container'>
            <div className="shop-product">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="shop-cart">
                <Cart cart={cart}>
                    <Link className='link' to="/orders">
                        <button className='cart-btn'>
                            <p>Review Order</p>
                            <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;