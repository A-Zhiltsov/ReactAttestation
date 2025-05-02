import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Styles.css';
import product1 from '../../assets/img/product1.jpg';
import ProductCard_Cart from '../../components/ProductCard/ProductCard_Cart';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'MANGO PEOPLE T‑SHIRT',
            price: 300,
            color: 'Red',
            size: 'XL',
            quantity: 2,
            image: product1
        },
        {
            id: 2,
            name: 'MANGO PEOPLE T‑SHIRT',
            price: 300,
            color: 'Red',
            size: 'XL',
            quantity: 2,
            image: product1
        }
    ]);

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;

        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) =>
            total + (item.price * item.quantity), 0);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const navigate = useNavigate();



    return (
        <div>
            <div className="top-head center">
                <div className="top-head__left">
                    <h2 className="top-head__left__heading">SHOPPING CART</h2>
                </div>
            </div>

            <section className="cart center">
                <div className="cart__content">
                    <div className="cart__content__items">
                        {cartItems.map(item => (
                            <ProductCard_Cart
                                key={item.id}
                                item={item}
                                onRemove={removeItem}
                                onUpdateQuantity={updateQuantity}
                            />
                        ))}
                    </div>

                    <div className="cart__content__buttons">
                        <button
                            className="cart__content__buttons__button"
                            onClick={clearCart}
                        >
                            CLEAR SHOPPING CART
                        </button>
                        <button
                            className="cart__content__buttons__button"
                            onClick={() => navigate('/catalog')}
                        >
                            CONTINUE SHOPPING
                        </button>
                    </div>
                </div>

                <div className="cart__purchase-box">
                    <div className="cart__purchase-box__delivery">
                        <h2 className="delivery__heading">SHIPPING ADRESS</h2>
                        <input className="delivery__input" type="text" placeholder="State" required />
                        <input className="delivery__input" type="text" placeholder="City" required />
                        <input className="delivery__input" type="text" placeholder="Postcode / Zip" required />
                        <button className="delivery__button">GET A QUOTE</button>
                    </div>

                    <div className="cart__purchase-box__upshot">
                        <div className="upshot__subtotal">
                            <p>SUB TOTAL</p>
                            <p className="upshot__subtotal__value">${calculateTotal()}</p>
                        </div>
                        <div className="upshot__grandtotal">
                            <p>GRAND TOTAL</p>
                            <p className="upshot__grandtotal__value">${calculateTotal()}</p>
                        </div>
                        <hr className="upshot__line" />
                        <button className="upshot__button">PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;