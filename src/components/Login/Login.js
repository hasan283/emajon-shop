import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const location = useLocation()
    const from = location.state?.form?.pathName || '/shipment'


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }
    const handleSingInBlur = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div className="form">
                <h2>Login</h2>
                <form onSubmit={handleSingInBlur}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading ....</p>
                    }
                    <div className="submit-btn">
                        <input type="submit" value="Login" />
                    </div>
                </form>
                <p>New To Ema-Jon: <Link to='/singUp'>Create An Account</Link></p>
            </div>
        </div>
    );
};

export default Login;