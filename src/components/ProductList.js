import React from 'react';
import { useState, useEffect } from 'react';
import './ProductList.css'

const ProductList = () => {

  const [products, setProducts] = useState([]);

  
  const getProducts = async () => {
    let result = await fetch('http://localhost:5000/products');
    result = await result.json();
    setProducts(result);
  }
  console.log("products", products);

  useEffect(()=>{
    getProducts();
},[]);


    return(
        <div className='product-list'>
          <h3 className='product-heading'>ProductList</h3> 
          
          <ul>
              <li className='ul-he'>S.No</li>
              <li className='ul-he'>Name</li>
              <li className='ul-he'>Price</li>
              <li className='ul-he'>Category</li>
              <li className='ul-he'>Company</li>
              <li className='ul-he'>Description</li>
          </ul>
          {
            products.map((item,index)=>{
                return(
                    <ul>
                    <li>{index+1}</li>
                    <li>{item.name}</li>
                    <li>${item.price}</li>
                    <li>{item.category}</li>
                    <li>{item.company}</li>
                    <li>{item.description}</li>
                    </ul>
                )
            })
          }
        </div>
    )
}

export default ProductList;