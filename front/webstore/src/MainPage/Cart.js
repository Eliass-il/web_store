import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CartPage() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('http://localhost:5432/api/cart', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setCart(res.data);
            } catch (err) {
                console.error('Error loading cart', err);
            }
        };
        fetchCart();
    }, []);

    const removeItem = async (productId) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:5432/api/cart/remove/${productId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setCart(prev => prev.filter(item => item.product.id !== productId));
        } catch (err) {
            console.error('Failed to remove', err);
        }
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            {item.product.name} × {item.quantity}
                            <button onClick={() => removeItem(item.product.id)}>❌ Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CartPage;
