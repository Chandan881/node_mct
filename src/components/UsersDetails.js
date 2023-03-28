import React from 'react';
import { useState, useEffect } from 'react';
import './UsersDetails.css'

const UsersDetails = () => {

  const [users, setUsers] = useState([]);

  
  const getUsers = async () => {
    let result = await fetch('http://localhost:5000/users');
    result = await result.json();
    setUsers(result);
  }
  console.log("Users", users);

  useEffect(()=>{
    getUsers();
},[]);


    return(
        <div className='user-list'>

         <div className='user-about'>
            <h3 className='user-heading'>User Details</h3> 
            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                parturient montes ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                parturient montes  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                parturient montes  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                parturient montes  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                parturient montes..
            </p>
         </div>
          
         <div className='user-shows'>
          <ul>
              <li className='ul-hed'>S.No</li>
              <li className='ul-hed'>Name</li>
              <li className='ul-hed'>Email</li>
              <li className='ul-hed'>City</li>
              <li className='ul-hed'>Gender</li>
              <li className='ul-hed'>Phone No</li>
          </ul>
          {
            users.map((item,index)=>{
                return(
                    <ul>
                    <li>{index+1}</li>
                    <li>{item.name}</li>
                    <li>{item.email}</li>
                    <li>{item.city}</li>
                    <li>{item.gender}</li>
                    <li>{item.number}</li>
                    </ul>
                )
            })
          }
          </div>

        </div>
    )
}

export default UsersDetails;