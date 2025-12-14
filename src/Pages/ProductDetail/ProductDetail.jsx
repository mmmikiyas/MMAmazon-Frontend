import React, { useEffect, useState } from 'react'
import classes from './productDetal.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {productUrl} from '../../Api/endPoints'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'
function ProductDetail() {
  const {productId}=useParams();
  const [product, setproduct]= useState({})
  const [isLoading,setisLoading]= useState(false)
  useEffect(()=>{
    setisLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
   setproduct(res.data)
   setisLoading(false); 
    }).catch((err)=>{
      console.log(err)
         setisLoading(false); 

    })

  },[])
  console.log(productId)
  return (
    <LayOut>
      {
        isLoading? (<Loader/>): (      <ProductCard
  product={product}
  />)
      }


    </LayOut>

    
  )
}

export default ProductDetail
