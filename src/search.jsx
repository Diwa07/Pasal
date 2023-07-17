import React, { useEffect, useState } from 'react'

import { Link } from "react-router-dom";
import Nav from './component/Nav';


const Search = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [showDetails, setshowDetails] = useState(true);
    const handleClick = () => {
        setshowDetails(!showDetails);
    };


    console.log(search)

    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        setProducts(await response.json());
        console.log(products);

    }


    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <>
      <Nav/>
      
            <div className='h-screen w-full  bg-[#d5d7da] justify-center  text-center  ' >
                <div className='text-start font-extrabold text-4xl p-2  ml-[7rem]' >        Search Products -
                    <  input type="search" className='rounded-r  w-[700px] text-xl h-[3rem] ml-4 rounded-lg ' placeholder='enter  a product category' onChange={(e) => setSearch(e.target.value)} /></div>


                <h1 className='font-extrabold text-4xl p-3  text-[#135880]'>Search Products</h1>


                <div className='grid grid-cols-4   p-4 pl-[140px] ' >
                    {
                        products.filter(item => {
                            const searchTerm = search.toLowerCase();
                            const product = item.category.toLowerCase();
                            return searchTerm && product.startsWith(searchTerm)
                        })
                            .map((item, id) => {
                                return (
                                    <div className='mt-[-4] pl-[-10px] h-auto  w-[220px] bg-white rounded-xl mb-8'>
                                        <div className='mt-[-4] pl-[-10px] h-[255px] w-[220px] bg-white  rounded-xl p-3 pt-4 '>

                                            {showDetails && (<Link to="/productDetails"> {
                                                <img src={item.image} alt='load' onClick={handleClick} className='h-[220px] w-full  mt-3 hover:scale-150 transform transition-all rounded-xl ' />}</Link>

                                            )}

                                        </div>
                                        <h1 className='text-[green] font-bold'> ${item.price} </h1>
                                        <h1 className='text-[#135880] font-extrabold mt-3 '>{item.title} </h1>
                                    </div>
                                )
                            })
                    }

                </div>




            </div>




        </>



    )
}


export default Search