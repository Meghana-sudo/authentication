import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserRoute from './pages/UserRoute';
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { auth } from './firebase';
import { setUser } from './redux/action';
 



function App() {
  const dispatch =useDispatch();

useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{
    if(authUser) {
      dispatch(setUser(authUser));
    } else {
      dispatch(setUser(null));
    }
  });
},[dispatch]);


  return (
    <BrowserRouter>
    <div className="App">
    <Switch >
      <UserRoute exact path ="/" component={Home}/>
      <Route path ="/login" component={Login}/>
      <Route  path ="/Register" component={Register}/>

    </Switch>

    </div>


    </BrowserRouter>
    
     
  );
}

export default App;
