"use client";
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function AppWrapper({ children }) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(null);

    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`Đã thêm ${product.name} vào giỏ!`);
    };

    return (
        <CartContext.Provider value={{ cart, setCart, user, setUser, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useAppContext() {
    return useContext(CartContext);
}