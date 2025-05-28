import React from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function Header() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    let userEmail = '';
    if (token) {
        try {
            const decoded = jwtDecode(token);
            userEmail = decoded.sub || decoded.email || ''; // зависит от структуры твоего токена
        } catch (err) {
            console.error('Invalid token:', err);
            localStorage.removeItem('token');
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
        window.location.reload();
    };

    return (
        <header style={styles.header}>
            <div style={styles.leftSection}>
                <div style={styles.logo} onClick={() => navigate('/')}>
                    WebStore
                </div>
                <input
                    type="text"
                    placeholder="Search products..."
                    style={styles.search}
                />
            </div>

            <div style={styles.actions}>
                {token ? (
                    <>
                        <span style={styles.welcomeText}>Hello, {userEmail}</span>
                        <button style={styles.button} onClick={() => navigate("/cart")}>🛒</button>
                        <button style={styles.button} onClick={handleLogout}>Log out</button>
                    </>
                ) : (
                    <>
                        <button style={styles.button} onClick={() => navigate('/login')}>Log in</button>
                        <button style={styles.button} onClick={() => navigate('/signup')}>Sign Up</button>
                        <button style={styles.button} onClick={() => navigate("/cart")}>🛒</button>
                    </>
                )}
            </div>
        </header>
    );
}

const styles = {
    header: {
        padding: '16px',
        backgroundColor: '#f2f2f2',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
    },
    logo: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        cursor: 'pointer'
    },
    search: {
        width: '400px',
        padding: '8px 12px',
        fontSize: '1rem',
        borderRadius: '20px',
        border: '1px solid #ccc',
        outline: 'none'
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    button: {
        padding: '8px 16px',
        fontSize: '1rem',
        cursor: 'pointer'
    },
    welcomeText: {
        fontSize: '0.95rem',
        fontStyle: 'italic',
        marginRight: '8px'
    }
};

export default Header;
