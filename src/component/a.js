import { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from './Nav';

import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";
import { Link } from 'react-router-dom';
import { selectProduct } from '../redux/product/productSlice';


const ProductList = () => {
  const [data, setData] = useState()
  const dispatch = useDispatch();

  const handleProductClick = (product) => {
    dispatch(selectProduct(product));
    handleAdd(data);
  };
 

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`, {
     
      }) ;
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleAdd = (data) => {
    dispatch(add(data))

    
  };
    
      useEffect(() => {
        fetchData()
    }, [] )
  return (<>
  <Nav/>
  <div className='h-full  w-screen bg-[gray] justify-between ' > 
  
                      <h1 className='text-4xl   '> our products</h1>
          <div className='grid grid-cols-4   p-7 border  border-black'>

          { data &&
    data.map ((item,id)=>{
       return ( <>
    
       <div className='  h-[auto] rounded-2xl w-[250px] border border-[red]  mb-7  p-2 bg-[#EDE4FF]' >
       
      
       <Link to = {`/products/${item.id}`}>  <img className=' rounded-2xl hover:scale-125 transform transition-all mb-8  ' src={item.image} 
   alt='load' onClick={() => handleProductClick(data)} /> </Link>
        
   <h2> label ={item.price} </h2>
   <h2> category ={item.item} </h2>


 
       </div>
 </>) } )}
      </div>
      
    
</div>
    </>
  )
}




export default ProductList