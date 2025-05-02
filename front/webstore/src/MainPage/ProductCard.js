import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
    console.log('Product received in card:', product);
    const {
        productCompany,
        productTitle,
        productPrice,
        productDiscount,
        productVolume,
    } = product;
    const navigate = useNavigate();

    const originalPrice = productDiscount
        ? (productPrice * (1 + product.productDiscount / 100)).toFixed(2)
        : null;

    return (
        <div style={styles.card}>
            <div style={styles.content}>
                <img
                    src="/skincare-demo-product.png"
                    alt={productTitle}
                    style={styles.image}
                />

                <h3 style={styles.company}>{productCompany}</h3>
                <div style={styles.titleWrapper}>
                    <h3 style={styles.title}>{productTitle}</h3>
                </div>
                <p style={styles.volume}>Volume: {productVolume}</p>
                <p style={styles.quantity}>Quantity left: {product.productQuantityLeft}</p>

                <div style={styles.priceBlock}>
                    {originalPrice && (
                        <span style={styles.oldPrice}>{originalPrice} zł</span>
                    )}
                    <span style={styles.newPrice}>{productPrice} zł</span>
                </div>
            </div>

            <div style={styles.buttonWrapper}>
                <button
                    style={styles.button}
                    onClick={() => navigate(`/product/${product.slug}`)}
                >Open...

                </button>

            </div>
        </div>
    );
}

const styles = {
    card: {
        width: '220px',
        height: '0%',                // адаптивно, но гибко
        minHeight: '420px',            // одинаковая высота
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '12px',
        padding: '16px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box'
    },

    content: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },

    buttonWrapper: {
        marginTop: 'auto'
    },
    company: {
        fontSize: '1.05rem',
        fontWeight: 'bold',
        color: '#111',
        marginBottom: '8px'
    },
    titleWrapper: {
        minHeight: '42px', // ← подбери по факту: 42px для 1 строки, 60px — для 2
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },

    title: {
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#111',
        margin: 0
    },
    volume: {
        fontSize: '0.9rem',
        color: '#555',
        marginBottom: '4px'
    },
    priceBlock: {
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        alignItems: 'center',
        marginBottom: '10px'
    },
    oldPrice: {
        textDecoration: 'line-through',
        color: '#999',
        fontSize: '0.85rem'
    },
    newPrice: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: '1rem'
    },
    button: {
        padding: '8px 12px',
        border: 'none',
        borderRadius: '6px',
        backgroundColor: '#111',
        color: 'white',
        cursor: 'pointer',
        fontSize: '0.9rem'
    },
    quantity: {
        fontSize: '0.9rem',
        color: '#555',
        marginBottom: '8px'
    },
};

export default ProductCard;
