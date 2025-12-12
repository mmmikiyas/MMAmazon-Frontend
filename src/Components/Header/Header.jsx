import React from 'react'
import logo from '../../../src/images/amazonLogo.png'
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import classes from './Header.module.css'
function Header() {
  return (
    <>
        <section>
        <div className={classes.header_container}>
            {/* logo */}
           <div className={classes.logo_container}>
            <a href="#">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='amazon logo' />
            </a>
 
            <div className={classes.delivery}> 
            <span>
   
                <FaSearch/>
            </span>
            <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
            </div>
            </div>
            </div>
        
            {/* search */}
        <div className={classes.search}>
            <select name="" id="">
                <option value="">All</option>
            </select>
            <input type="text" name='' placeholder='search Product' />
            {/* icon */}
             <FaSearch size={25}/>
        </div>
        {/* right side link */}
   








     <div className={classes.order_container}>
            <a href='' className={classes.language}>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_the_United_States_%28DDD-F-416E_specifications%29.svg/250px-Flag_of_the_United_States_%28DDD-F-416E_specifications%29.svg.png" alt="" srcset="" />
 <section>
    <option value="">EN</option>
 </section>
            </a>
 {/* three components */}
 <a href="">

        <p>Sign In</p>
        <span>Account & Lists</span>
   
 </a>
 {/* orders */}
 <a href="">
    <p>returns</p>
    <span>& Orders</span>
 </a>
 {/* carts */}
 <a  className={classes.cart}>
 {/* icons */}
  <CiShoppingCart/>
 <span>0</span>
 </a>
 </div>







        </div>
    </section>
    </>
  );
};

export default Header
