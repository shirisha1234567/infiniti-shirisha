import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Productlist(){
    const[data,setData]=useState([])
    useEffect(()=>{
         axios.get('https://dummyjson.com/products')
         .then((res)=>setData(res.data.products))

    },[])
   return(
      <>
      <div className='cardout'>
      {
         data.map(item=>(
            <>
             <div className='cardin'>
               <div><img src={item.thumbnail} height='100px' width='100px' className='images'/></div>
               <div>{item.brand}</div>
               <div>Rs:{item.price}/-</div>
               <div>Rating:{item.rating}</div>
             </div>
            </>
         ))
      }
    </div>
      </>
   )
}
export default Productlist