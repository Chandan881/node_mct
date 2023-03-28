import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import Home from './components/Home';
import ProductList from './components/ProductList';
import UsersDetails from './components/UsersDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>

       <Route element={<PrivateComponent />}>
        <Route path='/home' element={<h1><Home /></h1>} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/users' element={<UsersDetails />} />
        <Route path='/contact' element={<h1 className='contact-comp'>Contact Component is Under Development</h1>} />       
        <Route path='/logout' element={<h1>Logout</h1>} />
       </Route>

        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
