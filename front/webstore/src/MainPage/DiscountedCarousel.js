import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

function DiscountCarousel() {
    const [products, setProducts] = useState([]);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);

    const scrollRef = useRef(null);

    useEffect(() => {
        axios.get('http://localhost:5432/api/products/discounted')
            .then(res => {
                setProducts(res.data);
                setTimeout(updateButtonVisibility, 100); // ждать пока отрендерится
            })
            .catch(err => console.error('Error fetching discounted products:', err));
    }, []);

    const CARD_WIDTH = 236;

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -CARD_WIDTH, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' });
        }
    };

    const updateButtonVisibility = () => {
        const container = scrollRef.current;
        if (!container) return;

        const { scrollLeft, scrollWidth, clientWidth } = container;

        setShowLeft(scrollLeft > 0);
        setShowRight(scrollLeft + clientWidth < scrollWidth - 1); // чуть-чуть прощаем
    };


    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        container.addEventListener('scroll', updateButtonVisibility);
        return () => container.removeEventListener('scroll', updateButtonVisibility);
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.titleBar}>
                <h2 style={styles.title}>Discounted Products</h2>
                <a href="/products/discounted" style={styles.viewAll}>View all</a>
            </div>
            <div style={styles.controls}>
                {showLeft && (
                    <button onClick={scrollLeft} style={styles.scrollButton}>←</button>
                )}

                <div style={styles.carousel} ref={scrollRef}>
                    {products.map(product => (
                        <div key={product.id} style={styles.cardWrapper}>
                            <ProductCard product={product}/>
                        </div>
                    ))}
                </div>

                {showRight && (
                    <button onClick={scrollRight} style={styles.scrollButton}>→</button>
                )}
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '30px 0'
    },
    titleBar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
        padding: '0 4px'
    },

    title: {
        fontSize: '1.4rem',
        margin: 0
    },

    viewAll: {
        fontSize: '0.95rem',
        textDecoration: 'underline',
        color: '#007bff',
        fontWeight: '400',
        cursor: 'pointer'
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        position: 'relative'
    },
    scrollButton: {
        fontSize: '1.5rem',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '6px 12px',
        cursor: 'pointer',
        zIndex: 1
    },
    carousel: {
        overflowX: 'auto',
        overflowY: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
        scrollBehavior: 'smooth',
        paddingBottom: '10px'
    },
    cardWrapper: {
        flex: '0 0 auto',
        height: '100%'
    }
};
 export default DiscountCarousel;