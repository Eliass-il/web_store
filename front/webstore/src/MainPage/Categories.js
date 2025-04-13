import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Categories() {
    const [categories, setCategories] = useState([]);

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
                <div key={cat.id} style={styles.category}>
                    {cat.name}
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
    category: {
        fontWeight: 'bold',
        cursor: 'pointer'
    }
};

export default Categories;
