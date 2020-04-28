import React, { useState, useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import './OrderReview.css'

const OrderReview = () => {
    const [cart, setCart] = useState([]);
    const total = cart.reduce((total, prd) => total + prd.price , 0)

    useEffect(() => {
        //cart
        const savedCart = getDatabaseCart();
        const foodId = Object.keys(savedCart);

        const cartFoods = foodId.map(id => {
            const food = fakeData.find(fd => fd.id === id);
            food.quantity = savedCart[id];
            return food;
        });
        setCart(cartFoods);
    },[])
    return (
        <div className="order-review">
            <div className="address">
                <h2>Edit Delivery Details</h2>
                <button className="btn">Save & Continue</button>
            </div>

            <div className="items">
                <h3> from Gulsshan Plaza Restaura GPR</h3>
                <p>Arriving in 20-30 min</p>
                <p>107 Rd No 8</p>
                <p>Subtotal -{cart.length} item</p>
                {
                    cart.map(fd => <ReviewItem
                        cart={cart.length}
                        food={fd}>
                        </ReviewItem>)
                }
                <div className="price">
                    <p>Subtotal -{cart.length} item<b>$ {total}</b></p>
                    <p>Tax <b>$5.00</b></p>
                    <p>Delivery fee <b>$2.00</b></p>
                    <h2>Total <b>$</b></h2>
                    <button className="btn">Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;