import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phnNumber, setPhnNumber] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const handlePhnNumberBlur = event => {
        setPhnNumber(event.target.value)
    }
    const handleCreateUser = event => {
        event.preventDefault()
        const shipping = { name, email, address, phnNumber }
        console.log(shipping)
    }

    return (
        <div className='form-container'>
            <div className="form">
                <h2>Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="number">Phone Number</label>
                        <input onBlur={handlePhnNumberBlur} type="number" name="number" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    {/* <p style={{ color: 'red' }}>{hookError}</p> */}
                    <div className="submit-btn">
                        <input type="submit" value="Add Shipping" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Shipment;