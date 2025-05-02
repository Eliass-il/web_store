import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductPage() {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5432/api/products/slug/${slug}`)
            .then(res => {
                setProduct(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching product:', err);
                setLoading(false);
            });
    }, [slug]);

    if (loading) return <p>Loading...</p>;
    if (!product) return <p>Product not found.</p>;

    return (
        <div style={styles.container}>
            <img
                src="/skincare-demo-product.png"
                alt={product.productTitle}
                style={styles.image}
            />

            <div style={styles.details}>
                <h1>{product.productTitle}</h1>
                <h3>{product.productDescription}</h3>
                <p><strong>Size: </strong>{product.productVolume}</p>
                <p><strong>Ingredients: </strong>{product.productIngredients}</p>

                <div style={styles.priceBlock}>
                    {product.productDiscount > 0 && (
                        <span style={styles.oldPrice}>
                            {(product.productPrice * (1 + product.productDiscount / 100)).toFixed(2)} zł
                        </span>
                    )}
                    <span style={styles.newPrice}>{product.productPrice} zł</span>
                </div>

                <button style={styles.button}>Add to cart</button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        gap: '40px',
        padding: '30px',
        maxWidth: '1000px',
        margin: '0 auto'
    },
    image: {
        width: '400px',
        height: '400px',
        objectFit: 'cover',
        borderRadius: '12px'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
    },
    priceBlock: {
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
    },
    oldPrice: {
        textDecoration: 'line-through',
        color: '#888'
    },
    newPrice: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: '1.4rem'
    },
    button: {
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#111',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1rem',
        cursor: 'pointer'
    }
};

export default ProductPage;
