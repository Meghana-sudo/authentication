import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { registerInitiate } from "../redux/action";
import "./Register.css";



function Register() {
  const [state, setState] = useState({
    displayName: "",
    passwordConfirm: "",
    email: "",
    password: "",
  });

  
  const {currentUser}= useSelector((state)=>state.user);
 

const dispatch =useDispatch();

  const history =useHistory();

  useEffect(()=>{
      if (currentUser){
      history.push("/")
      }
  },[currentUser, history]);

  const { email, password, displayName, passwordConfirm } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
     
      

      if(password !== passwordConfirm){
        
            return;
           
      }

      dispatch(registerInitiate(email,password,displayName))
      setState({email:"",displayName:"", password:"", passwordConfirm:""});
  };
  const handleChange = (e) => {
      let {name,value} = e.target;
      setState({...state,[name]:value});
  };

  return (
    <div>
      <div id="register-form">
        <form className="form-signup" onSubmit={handleSubmit}>
          <h1
            className="h3 md-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign up
          </h1>

          <input
            type="text"
            id="displayName"
            className="form-control"
            name="displayName"
            placeholder="Full name"
            onChange={handleChange}
            value={displayName}
            required
          />

          <input
            type="email"
            id="inputEmail"
            className="form-control"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={email}
            required
          />

          

          <input
            type="password"
            id="inputPassword"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={password}
            required
          />

          <input
            type="password"
            id="passwordConfirm"
            className="form-control"
            name="passwordConfirm"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={passwordConfirm}
            required
          />

          <button className="btn btn-secondary btn-block" type="submit">
          <i className="fas fa-user-plus">
            Sign Up</i>
          </button>
         <Link to ="/login">
         <i className="fas fa-angle-left">
            Back
         </i>

         </Link>
          
        </form>
        <br/>
      </div>
    </div>
  );
}

export default Register;
