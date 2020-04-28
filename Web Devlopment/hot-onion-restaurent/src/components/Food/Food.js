import React from 'react';
import "./Food.css"
import { Link } from 'react-router-dom';

const Food = (props) => {
    console.log(props.breakfast.name)
    const {img, name, price, id, details} = props.breakfast;

    return (
        <div className="food">
            <img src={img} alt=""/>
            <h4 className="food-name"><Link to={"/food/"+id}>{name}</Link></h4>
            <p>{details}</p>
            <h2>$: {price}</h2>
        </div>
    );
};

export default Food;