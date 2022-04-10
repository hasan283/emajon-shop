import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { Link, useNavigate } from 'react-router-dom';
import './SingUp.css';

const SingUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConPassBlur = event => {
        setConPassword(event.target.value)
    }

    if (user) {
        navigate('/shop')
    }
    const handleCreateUser = event => {
        event.preventDefault()
        if (password !== conPassword) {
            setError('You two Password did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password Must be 6 corrector');
            return;
        }
        createUserWithEmailAndPassword(email, password);

    }
    return (
        <div className='form-container'>
            <div className="form">
                <h2>Sing Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Conform Password</label>
                        <input onBlur={handleConPassBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    {/* <p style={{ color: 'red' }}>{hookError}</p> */}
                    <div className="submit-btn">
                        <input type="submit" value="Register" />
                    </div>
                </form>
                <p>Already Have an Account? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default SingUp;