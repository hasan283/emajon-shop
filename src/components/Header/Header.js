import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSingOut = () => {
        signOut(auth);
    }
    return (
        <div className='header'>
            <nav className='nav'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-link">
                    <Link to="/shop">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                    {
                        user ?
                            <button onClick={handleSingOut}>Sing Out</button>
                            :
                            <Link to="/login">Login</Link>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;