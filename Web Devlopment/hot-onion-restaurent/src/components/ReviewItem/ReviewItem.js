import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    console.log(props);
    const {name, img, price} = props.food
    return (
        <div>
            <div className="review-food">
                <img src={img} alt=""/>
                <div className="">
                <h3>{name}</h3>
                <br/>
                <h2>{price}</h2>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;