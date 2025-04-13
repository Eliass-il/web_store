import React from 'react';

function Header() {
    return (
        <header style={styles.header}>
            <div style={styles.leftSection}>
                <div style={styles.logo} onClick={() => window.location.href = '/'}>
                    WebStore
                </div>
                <input
                    type="text"
                    placeholder="Search products..."
                    style={styles.search}
                />
            </div>

            <div style={styles.actions}>
                <button style={styles.button}>Log in</button>
                <button style={styles.button}>Sign Up</button>
                <button style={styles.button}>🛒</button>
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
        gap: '16px' // расстояние между логотипом и строкой поиска
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
        gap: '10px'
    },
    button: {
        padding: '8px 16px',
        fontSize: '1rem',
        cursor: 'pointer'
    }
};

export default Header;
