import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Categories() {
    const [categories, setCategories] = useState([]);
    const [hoveredCategoryId, setHoveredCategoryId] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5432/api/category')
            .then(res => {
                setCategories(res.data);
            })
            .catch(err => {
                console.error('Error fetching categories:', err);
            });
    }, []);

    return (
        <div style={styles.wrapper}>
            {categories.map(cat => (
                <div
                    key={cat.id}
                    style={styles.categoryWrapper}
                    onMouseEnter={() => setHoveredCategoryId(cat.id)}
                    onMouseLeave={() => setHoveredCategoryId(null)}
                >
                    <div style={styles.category}>{cat.name}</div>
                    {cat.subcategories && cat.subcategories.length > 0 && hoveredCategoryId === cat.id && (
                        <div style={styles.dropdown}>
                            {cat.subcategories.map(sub => (
                                <div key={sub.id} style={styles.dropdownItem}>
                                    {sub.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

const styles = {
    wrapper: {
        display: 'flex',
        padding: '12px 20px',
        backgroundColor: '#fff',
        borderBottom: '1px solid #ccc',
        gap: '20px',
        justifyContent: 'center',
    },
    categoryWrapper: {
        position: 'relative',
    },
    category: {
        fontWeight: 'bold',
        cursor: 'pointer',
        padding: '6px 12px',
    },
    dropdown: {
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1000,
        minWidth: '140px'
    },
    dropdownItem: {
        padding: '10px',
        whiteSpace: 'nowrap',
        cursor: 'pointer'
    }
};

export default Categories;
