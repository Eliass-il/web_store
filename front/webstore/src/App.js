import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './MainPage/Header'
import Categories from "./MainPage/Categories";
import DiscountCarousel from "./MainPage/DiscountedCarousel";
import Footer from "./MainPage/Footer";
import ProductPage from "./ProductPage/ProductPage"
import SignupPage from "./MainPage/SignupPage"
import LoginPage from "./MainPage/LoginPage"
import Cart from "./MainPage/Cart"
import {CartProvider} from "./Context/CartContext";



function HomePage() {
    return (
        <>
            <DiscountCarousel/>
        </>
    );
}

function App(){
    return(
        <CartProvider>
            <Router>
                <div style={styles.container}>
                    <Header/>
                    <Categories/>
                    <Routes>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/product/:slug" element={<ProductPage />}/>
                        <Route path="/signup" element={<SignupPage />}/>
                        <Route path="/login" element={<LoginPage />}/>
                        <Route path="/cart" element={<Cart />}/>
                    </Routes>
                    <Footer/>
                </div>
            </Router>
        </CartProvider>
    );
}

const styles = {
    container: {
        maxWidth: '1200px',       // ограничивает ширину, чтобы контент не "растекался"
        margin: '0 auto',         // центрирует весь блок по горизонтали
        padding: '0 20px'         // добавляет по 20px отступа слева и справа
    }
};

export default App;
