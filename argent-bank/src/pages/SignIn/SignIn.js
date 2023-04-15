import './SignIn.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUserProfile } from '../../store/userSlice';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/api/v1/user/login', {
                email: email,
                password: password,
            });

            if (response.status !== 200) {
                throw new Error('Login failed');
            }

            const token = response.data.body.token;
            localStorage.setItem('authToken', token);
            dispatch(fetchUserProfile(token));
            navigate('/user');

        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    return (
        <main className='bg-dark'>
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Username</label>
                        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className='sign-in-button'>Sign In</button>
                </form>
            </section>
        </main>
    )
}

export default SignIn;