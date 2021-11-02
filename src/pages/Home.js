import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { logoutInitiate } from '../redux/action';



function Home() {

  const {currentUser}= useSelector((state)=>state.user);
  const dispatch=useDispatch();


const handleAuth =()=>{
  if(currentUser){
    dispatch(logoutInitiate());
  }
}



    return (
        <div>
          <h2>Welcome  </h2>
          <br/>
          <button className="btn btn-danger" onClick={handleAuth}>Logout</button>
        </div>
    )
}

export default Home
