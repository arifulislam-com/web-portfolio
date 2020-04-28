import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import './SignIn.css'
import { Link } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

function UseAuth() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email:'',
    photo: ''
  })
  const handleSignOut = () => {
    firebase.auth().signOut()
    .then(res => {
      const signedOutUser = {
        isSignedIn: false, 
        name: '',
        phot:'',
        email:'',
        password:'',
        error:'',
        isValid:false,
        existingUser: false
      }
      setUser(signedOutUser);
      console.log(res);
    })
    .catch( err => {

    })
  }

  const is_valid_email = email =>  /(.+)@(.+){3,}\.(.+){3,}/.test(email); 
  const hasNumber = input => /\d/.test(input);
  
  const switchForm = e =>{
    const createdUser = {...user};
    createdUser.existingUser = e.target.checked;
    setUser(createdUser);
  }
  const handleChange = e =>{
    const newUserInfo = {
      ...user
    };

    let isValid = true;
    if(e.target.name === 'email'){
      isValid = is_valid_email(e.target.value);
    }
    if(e.target.name === "password"){
      isValid = e.target.value.length > 8 && hasNumber(e.target.value);
    }

    newUserInfo[e.target.name] = e.target.value;
    newUserInfo.isValid = isValid;
    setUser(newUserInfo);
  }

  const createAccount = (event) => {
    if(user.isValid){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        console.log(res);
        const createdUser = {...user};
        createdUser.isSignedIn = true;
        createdUser.error = '';
        setUser(createdUser);
      })
      .catch(err => {
        console.log(err.message);
        const createdUser = {...user};
        createdUser.isSignedIn = false;
        createdUser.error = err.message;
        setUser(createdUser);
      })
    }
    event.preventDefault();
    event.target.reset();
  } 

  const signInUser = event => {
    if(user.isValid){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        console.log(res);
        const createdUser = {...user};
        createdUser.isSignedIn = true;
        createdUser.error = '';
        setUser(createdUser);
      })
      .catch(err => {
        console.log(err.message);
        const createdUser = {...user};
        createdUser.isSignedIn = false;
        createdUser.error = err.message;
        setUser(createdUser);
      })
    }
    event.preventDefault();
    event.target.reset();
  }

  return (
    <div className="App">
      {
        user.isSignedIn && <div>
          <h1> Welcome, {user.name}</h1>
          <p>Your email: {user.email}</p>
          <Link to="/orderReview"><button className="btn">Proceed Checkout</button></Link>
        </div>
      } 
      <form style={{display:user.existingUser ? 'block': 'none'}} onSubmit={signInUser}>
        <input type="text" onBlur={handleChange} name="email" placeholder="Your Email" required/>
        <br/>
        <input type="password" onBlur={handleChange} name="password" placeholder="Your Password" required/>
        <br/>
        <input type="submit" value="SignIn"/>
      </form>
      <form style={{display:user.existingUser ? 'none': 'block'}} onSubmit={createAccount}>
        <input type="text" onBlur={handleChange} name="name" placeholder="Your Name" required/>
        <br/>
        <input type="text" onBlur={handleChange} name="email" placeholder="Your Email" required/>
        <br/>
        <input type="password" onBlur={handleChange} name="password" placeholder="Your Password" required/>
        <br/>
        <input type="password" onBlur={handleChange} name="password" placeholder="Confirm Password" required/>
        <br/>
        {
          user.isSignedIn ? <button onClick={handleSignOut} >Sign out</button> :
          <button>Sign in</button>
        }
      </form>
      <input type="checkbox" name="switchForm" onChange={switchForm} id="switchForm"/>
      <label htmlFor="switchForm"> Already have an account</label>
      {
        user.error && <p style={{color:'red'}}>{user.error}</p>
      }
    </div>
  );
}

export default UseAuth;