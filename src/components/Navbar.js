import React,{Fragment} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/')
  }

    return(
        <div>
         { auth ? <ul className='nav-ul nav-right'>
             <li><Link to='/home'>Home</Link></li>
             <li><Link to='/products'>Products</Link></li>
             <li><Link to='/users'>Users</Link></li>
             <li><Link to='/contact'>Contact</Link></li>
             <li><Link onClick={logout} to='/'>Logout ({JSON.parse(auth).name})</Link></li>
           </ul>
           :
           <ul className='nav-ul nav-right'>
              <li><Link to='/signup'>Sign Up</Link></li>
              <li><Link to='/' >Login</Link></li>
           </ul>
          }
        </div>
    )
}

export default Navbar;