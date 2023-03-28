import React, {useEffect, useState} from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [number, setNumber] = useState("");
const [city, setCity] = useState("");
const [gender, setGender] = useState("");
const navigate = useNavigate();


useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth)
    {
        navigate('/home')
    }
})

const collectData = async ()=>{
    console.log(name,email,password,number,city,gender);
    let result = await fetch('http://localhost:5000/register',{
        method:'post',
        body: JSON.stringify({name,email,password,number,city,gender}),
        headers:{
            'Content-Type':'application/json'
        },
    })
    result = await result.json()
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));
    // if(result)
    // {
    //    navigate('/login');
    // }
}


    return(
    <div className='container'>
        <div className='register'>
           <h1 className='head'>Register</h1>
           <div className='box'>
              <label>Full Name</label>
              <input type="text" value={name} 
              onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Name' />
           </div>

           <div className='box'>
              <label>Email</label>
              <input type="text" value={email} 
              onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email' />
           </div>

           <div className='box'>
              <label>Password</label>
              <input type="password" value={password} 
              onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password' />
           </div>

           <div className='box'>
             <label>Phone Number</label>
             <input type='number' value={number} 
             onChange={(e)=>{setNumber(e.target.value)}} placeholder='Enter Phone Number'/>
           </div>

           <div className='box'>
             <label>City</label>
             <input type='text' value={city} 
             onChange={(e)=>{setCity(e.target.value)}} placeholder='Enter city'/>
           </div>

           <div className='bx'>
             <label>Gender</label>
             <div className='form-inline'>
               <label><input type='radio' name='gender' value='Male' onChange={(e)=>{setGender(e.target.value)}} />Male</label>
               <label><input type='radio' name='gender' value='Female' onChange={(e)=>{setGender(e.target.value)}} />Female</label>
             </div>
           </div>

           <div className='box'>
             <button onClick={collectData}  className='btn' type='button' > Sign Up </button>
           </div>
       </div>
    </div>
    )
}

export default SignUp;