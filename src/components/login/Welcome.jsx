import React, { useState } from 'react';
import './welcome.css'; // Make sure to replace with the actual path to your CSS file
import axios from 'axios';

const Welcome = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', {
                username,
                password,
            });

            console.log('Login response:', response.data);

            // Handle successful login (e.g., redirect to dashboard)
            // For this example, you can show a success message or redirect the user

        } catch (error) {
            console.error('Error logging in:', error);
            // Handle login failure (e.g., show an error message)
        }
    };
    return (
        <div className="main">
            <div className='back'>
                <p className="sign" align="center">
                    Facebook Page Integration
                </p>
                <button className="submitw"  onClick={handleSubmit} align="center" type="submit">
                    Connect to Page
                </button>
            </div>
        </div>
    );
};

export default Welcome;
