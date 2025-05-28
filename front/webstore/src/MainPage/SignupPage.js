import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        city: '',
        phoneNumber: '',
        postIndex: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5432/api/auth/signup', form);
            navigate('/login');
        } catch (err) {
            alert('Registration failed');
            console.error(err);
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSignup} style={styles.form}>
                <h2 style={styles.title}>Sign Up</h2>

                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={handleChange}
                    style={styles.input}
                />
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    style={styles.input}
                />
                <input
                    type="text"
                    name="postIndex"
                    placeholder="Post Index"
                    onChange={handleChange}
                    style={styles.input}
                />

                <button type="submit" style={styles.button}>Sign Up</button>

                <p style={styles.bottomText}>
                    Already have an account?{" "}
                    <span style={styles.link} onClick={() => navigate('/login')}>Log in</span>
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
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
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
        fontSize: '1rem'
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

export default SignupPage;
