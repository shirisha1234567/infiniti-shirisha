import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './Search'
function Viewall(){
   const[data,setData]=useState([])
   useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>setData(res.data))

   },[])
    return(
      <div className='cardout'>
         <h4>All categories</h4>
         <Search/>
      {
         data?.map(item=>(
            <>
            
             <div className='cardin'>
               <div><img src={item.image} height='100px' width='100px' className='images'/></div>
               <div>{item.category}</div>
             </div>
            </>
         ))
      }
    </div>
    )
}
 export default Viewall