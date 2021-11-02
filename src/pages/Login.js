import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { googleSiginInitiate,  fbSiginInitiate, loginInitiate } from "../redux/action";
import  '../pages/Login.css';

function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = state;

  const {currentUser}= useSelector((state)=>state.user);

const dispatch =useDispatch();

  const history =useHistory();

  useEffect(()=>{
      if (currentUser){
      history.push("/")
      }
  },[currentUser, history]);


  const handleGoogleSignin = () => {
    dispatch(googleSiginInitiate());

  };
  const handleFbSignin = () => {dispatch(fbSiginInitiate());};

  const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !password){
            return;
        }
        dispatch(loginInitiate(email,password));
        setState({email: "", password:""});
    };

  const handleChange = (e) => {
    let {name,value} = e.target;
    setState({...state,[name]:value});
};

  return (
    <div>
      <div id="logreg-forms">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign in
          </h1>

          <div className="social-login" >
            <button
              className="btn google-btn social-btn"
              type="button"
              onClick={handleGoogleSignin}
            >
              <span>
                <i className="fab fa-google-plus-g">Sign in with Google</i>
              </span>
            </button>

            <button
              className="btn facebook-btn social-btn"
              type="button"
              onClick={handleFbSignin}
            >
              <span>
                <i className="fab fa-facebook-f">Sign in with Facebook</i>
              </span>
            </button>
          </div>
          <p style={{ textAlign: "center" }}> OR </p>

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
           

          <button className="btn btn-secondary btn-block" type="submit">
          <i className="fas fa-user-plus">
          Sign in
              </i></button>
            <hr/>
            <p>Don't have account</p>
            <Link to= "/Register">
            <button className="btn btn-primary btn-block"  id="btn-signup" type="submit">Sign Up</button>
            </Link>

        </form>
      </div>
    </div>
  );
}

export default Login;
