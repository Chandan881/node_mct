import React,{ useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {

 const [email, setEmail] = useState();
 const [password, setPassword] = useState();
 const navigate = useNavigate();


useEffect(()=>{
    const auth = localStorage.getItem('user');
    if (auth) {
        navigate('/home')
    }
},[])

 const handleLogin = async () => {
    console.log(email,password);
    let result = await fetch('http://localhost:5000/login',{
        method:'post',
        body: JSON.stringify({email,password}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    result = await result.json();
    console.log(result);
    if(result.name){
       localStorage.setItem("user",JSON.stringify(result));
       navigate('/home');
    } else {
        alert("please enter correct details")
    }
 }

 const goSignup = () => {
    navigate('/signup')
 }


    return(
       <div className='boxs'> 
        <div className='contaner'>

          <div className='left-sec'>

            <h1 className='head-content'>Welcome back to</h1>
            <h1 className='head-contents'>Pretty Login</h1>
            <p className='cyfer'>It's great to have you back!</p>
            <div className='box names'>
              <label>Email</label>
              <input className='inpts' type="text" value={email} 
              onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email' />
            </div>
            <div className='box emails'>
              <label>Password</label>
              <input className='inpts' type="password" value={password} 
              onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password' />
            </div>
            
              <input type='checkbox' className='checkbx'/>
              <span className='remeber'>Remember me?</span>
            
            <p className='forget'>Forgot password?</p>
            <div className='btnss'>
               <button onClick={handleLogin} className='btn-login' type="button">LOGIN</button>
               <button  type="button" onClick={goSignup}  className='btn-signup'>CREATE ACCOUNT</button>
            </div>
            <p className='login-with'>Or login with</p>
            <h4 className='fb-gl'>Facebook Google</h4>

          </div>


          <div className='right-sec'>
             <img className='img' src="./image.jpg" alt="" />
          </div>

        </div>
       </div> 
    )
}

export default Login;