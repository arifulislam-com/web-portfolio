import React from 'react';
import './Attract.css'
import { Link } from 'react-router-dom';

const Attract = () => {
    return (
        <div className="first">
            <Link to="/signIn"><button className="btn">Checkout Your Food</button></Link>
        </div>
    );
};

export default Attract;