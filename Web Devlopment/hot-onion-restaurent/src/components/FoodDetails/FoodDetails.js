import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import './FoodDetails.css'
import { addToDatabaseCart } from '../../utilities/databaseManager';

const FoodDetails = () => {
    const {foodId}= useParams()
    const food = fakeData.find(bf => bf.id === foodId);
    const {img, name, price, id, details} = food;
    console.log(food);
    const [cart, setCart]= useState([]);

    const handleAddFood = (food)=> {
        const newCart = [...cart, food];
        setCart(newCart);
        const sameFood = newCart.filter(fd =>fd.id === food.id);
        const count = sameFood.length;
        addToDatabaseCart(food.id, count);
    };

    return (
        <div className="Details">
            <div className="FoodDetails">
            <h1>{name}</h1>
            <p>{details}</p>
            <h2>${price}</h2>
            <button onClick={() => handleAddFood(food)} className="btn">Add</button>
            </div>
            <div className="FoodDetailsImg">
            <img src={img} alt=""/>
            </div>
        </div>
    );
};

export default FoodDetails;