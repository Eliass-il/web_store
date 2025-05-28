import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5432/api/auth/login', {
                email,
                password
            });
            localStorage.setItem('token', res.data.token);
            navigate('/');
        } catch (err) {
            alert('Invalid credentials');
            console.error(err);
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleLogin} style={styles.form}>
                <h2 style={styles.title}>Log In</h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                    required
                />
                <button type="submit" style={styles.button}>Log In</button>

                <p style={styles.bottomText}>
                    Don't have an account?{" "}
                    <span style={styles.link} onClick={() => navigate('/signup')}>Sign up</span>
                </p>
            </form>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5'
    },
    form: {
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    title: {
        textAlign: 'center',
        marginBottom: '10px'
    },
    input: {
        padding: '12px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        fontSize: '1rem'
    },
    button: {
        padding: '12px',
        backgroundColor: '#111',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.3s'
    },
    bottomText: {
        textAlign: 'center',
        fontSize: '0.9rem'
    },
    link: {
        color: '#007bff',
        cursor: 'pointer',
        textDecoration: 'underline'
    }
};

export default LoginPage;
