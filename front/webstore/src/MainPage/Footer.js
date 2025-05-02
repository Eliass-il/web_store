import React from 'react';
import { FaTelegramPlane, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer style={styles.footer}>
            <div style={styles.left}>© 2025 WebStore</div>

            <div style={styles.right}>
                <a href="https://t.me/your_channel" style={styles.iconLink} target="_blank" rel="noopener noreferrer">
                    <FaTelegramPlane size={22} />
                </a>
                <a href="https://instagram.com/your_page" style={styles.iconLink} target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={22} />
                </a>
                <a href="https://youtube.com/your_channel" style={styles.iconLink} target="_blank" rel="noopener noreferrer">
                    <FaYoutube size={22} />
                </a>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        marginTop: '200px',
        padding: '20px 40px',
        backgroundColor: '#111',
        borderTop: '1px solid #ddd',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.95rem'
    },
    left: {
        color: '#f8f8f8',
        fontWeight: '500'
    },
    right: {
        display: 'flex',
        gap: '20px'
    },
    iconLink: {
        color: '#f8f8f8',
        textDecoration: 'none'
    }
};

export default Footer;
