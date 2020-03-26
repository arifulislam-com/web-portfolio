import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  var nayoks = ['Sultan', 'Rashed', 'Ariful', 'Sony']
  const products = [
  {name: 'Photoshop', price: '$90.99'},
  {name: 'Illustrator', price: '$60.99'},
  {name: 'PDF Reader', price: '$6.99'}
]
  var person = {
    name: "Programmer Ariful",
    job: "Programing"
  }
  var style={
    color: "red",
    backgroundColor: "yellow"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>My Heading {(2*50)+320}</h1>
        <Counter></Counter>
        <Users></Users>

        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }

        {
          products.map(product => <li>{product.name}</li>)
        }

        {
          products.map(product => <Product product={product}></Product>)
        }
        
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>


        <Person name="Ruble Nayok" nayika="Moushomi"></Person>
        <Person name="Abu Sayed" nayika="Itta"></Person>
        <Person name="Shahimum" nayika="Cheri"></Person>
        <Person name="Kalam" nayika="Pochi"></Person>
        <Person name={nayoks[1]} nayika="All"></Person>                
        <h2 className="" style={style}>My Heading: {person.name +" "+ person.job}</h2>
        <p style={{backgroundColor:"green", color:"yellow"}}>My first react paragraph</p>
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsrs] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsrs(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}



function Product(props){
  const productStyle={
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
  }
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}


function Person(props){
  var personStyle={
    border:"2px solid red",
    margin:"10px"
  }
  return(
  <div style={personStyle}>
    <h1>Name: {props.name} </h1>
  <h2>Hero of {props.nayika}</h2>
  </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  const A = () => {
    const B = count - 1;
    setCount(B);
  };
  // const handleIncrease = () => setCount(count + 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={A}>Decrease</button>
      <button onClick={ () => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default App;
