import React,{ } from 'react';
import { useSelector } from 'react-redux';
import Products from '../products/products';

const Shop = () => {
 
    return (
        <div id="shopbg" className=" flex-wrap" >
       
        <Products/>
        </div>
      );
}
 
export default Shop;