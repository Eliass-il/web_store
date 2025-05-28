import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const token = localStorage.getItem('token');

    // Загружаем корзину при загрузке
    useEffect(() => {
        if (token) {
            // авторизованный: загрузка с backend
            axios.get('http://localhost:5432/api/cart', {
                headers: { Authorization: `Bearer ${token}` }
            }).then(res => {
                setCartItems(res.data);
            }).catch(() => setCartItems([]));
        } else {
            // гость: из localStorage
            const localCart = JSON.parse(localStorage.getItem('cart')) || [];
            setCartItems(localCart);
        }
    }, [token]);

    const saveLocalCart = (items) => {
        setCartItems(items);
        localStorage.setItem('cart', JSON.stringify(items));
    };

    const addItem = (product, quantity = 1) => {
        if (token) {
            // запрос на backend
            axios.post('http://localhost:5432/api/cart/add', null, {
                params: { productId: product.id, quantity },
                headers: { Authorization: `Bearer ${token}` }
            }).then(() => {
                setCartItems(prev => {
                    const found = prev.find(i => i.product.id === product.id);
                    if (found) {
                        return prev.map(i =>
                            i.product.id === product.id
                                ? { ...i, quantity: i.quantity + quantity }
                                : i
                        );
                    } else {
                        return [...prev, { id: -1, product, quantity }];
                    }
                });
            });
        } else {
            // обновляем localStorage
            const updated = [...cartItems];
            const index = updated.findIndex(i => i.product.id === product.id);
            if (index !== -1) {
                updated[index].quantity += quantity;
            } else {
                updated.push({ product, quantity });
            }
            saveLocalCart(updated);
        }
    };

    const removeItem = (productId) => {
        if (token) {
            axios.delete(`http://localhost:5432/api/cart/remove/${productId}`, {
                headers: { Authorization: `Bearer ${token}` }
            }).then(() => {
                setCartItems(prev => prev.filter(i => i.product.id !== productId));
            });
        } else {
            const updated = cartItems.filter(i => i.product.id !== productId);
            saveLocalCart(updated);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};
