import { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from './Nav';
import slide from '../uploads/slide.jpg'
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";
import { Link } from 'react-router-dom';
import { selectProduct } from '../redux/product/productSlice';


const ProductList = () => {
  const [data, setData] = useState([])
  const dispatch = useDispatch();

  const handleProductClick = (product) => {
    dispatch(selectProduct(product));
    handleAdd(data);
  };


  const fetchData = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`, {

      });
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
  }, [])
  return (<>
    <Nav />

    <div className='h-full w-full bg-[#d5d7da] justify-center  text-center  ' >

      <h1 className='font-extrabold text-4xl p-3 mb-[1rem] text-[#135880]'>   Mens's Collections </h1>
      <div className='grid grid-cols-4   p-4 pl-[140px] ' >
        {
          data.slice(0, 4).map((item, id) => {
            return (
              <div className='mt-[-4] pl-[-10px] h-auto mb-[2rem] w-[270px] bg-white rounded-xl'>
                <div className='mt-[-4] pl-[-10px] h-[265px] w-[250px] pl-9 bg-white  rounded-xl p-3 pt-4 '>
                  <Link to={`/products/${item.id}`}>
                    <img src={item.image} alt='load' className='h-[230px] w-full  mt-3 hover:scale-125 transform transition-all rounded-xl ' />
                  </Link>
                </div>
                <div className="border mb-4 grid-rows-5">

                  <h1 className='text-[green] font-bold'> ${item.price} </h1>
                  <h1 className='text-[#7a4231] font-extrabold mt-3 '>Rating - {item.rating.rate} </h1>
                  <img src={slide} alt='add to cart' className='w-[9.9rem] ml-[3.3rem] hover:scale-110 ' onClick={() => handleProductClick(data)} />
                  <h1 className='text-[#135880] font-extrabold mt-3 '> {item.title} </h1>


                </div>
              </div>
            )
          })
        }

      </div>

      <h1 className='font-extrabold text-4xl  mb-[1rem] text-[#135880]'>women's clothing</h1>
      <div className='grid grid-cols-4   p-4 pl-[140px] ' >
        {
          data.slice(14, 20).map((item, id) => {
            return (
              <div className='mt-[-4] pl-[-10px] h-auto  w-[270px] mb-[2rem] bg-white rounded-xl'>
                <div className='mt-[-4] pl-[-10px] h-[265px] w-[250px] pl-9 bg-white  rounded-xl p-3 pt-4 '>
                  <Link to={`/products/${item.id}`}>
                    <img src={item.image} alt='load' className='h-[230px] w-full  mt-3 hover:scale-125 transform transition-all rounded-xl ' />
                  </Link>
                </div>
                <div className="border mb-4 grid-rows-5">

                  <h1 className='text-[green] font-bold'> ${item.price} </h1>
                  <h1 className='text-[#7a4231] font-extrabold mt-3 mb-[1rem]'>Rating - {item.rating.rate} </h1>
                  <img src={slide} alt='add to cart' className='w-[9.9rem] ml-[3.3rem] hover:scale-110 ' onClick={() => handleProductClick(data)} />
                  <h1 className='text-[#135880] font-extrabold mt-3 '> {item.title} </h1>


                </div>
              </div>
            )
          })
        }

      </div>

      <h1 className='font-extrabold text-4xl mb-[1rem]  text-[#135880] '>Jewelery</h1>

      <div className='grid grid-cols-4 p-4 pl-[140px] ' >
        {
          data.slice(4, 8).map((item, id) => {
            return (
              <div className='mt-[-4] pl-[-10px] h-auto mb-[2rem] w-[270px] bg-white rounded-xl'>
                <div className='mt-[-4] pl-[-10px] h-[265px] w-[250px] pl-9 bg-white  rounded-xl p-3 pt-4 '>
                  <Link to={`/products/${item.id}`}>
                    <img src={item.image} alt='load' className='h-[230px] w-full  mt-3 hover:scale-125 transform transition-all rounded-xl ' />
                  </Link>
                </div>
                <div className="border mb-4 grid-rows-5">

                  <h1 className='text-[green] font-bold'> ${item.price} </h1>
                  <h1 className='text-[#7a4231] font-extrabold mt-3 '>Rating - {item.rating.rate} </h1>
                  <img src={slide} alt='add to cart' className='w-[9.9rem] ml-[3.3rem] hover:scale-110 ' onClick={() => handleProductClick(data)} />
                  <h1 className='text-[#135880] font-extrabold mt-3 '> {item.title} </h1>


                </div>
              </div>
            )
          })
        }

      </div>

      <h1 className='font-extrabold text-4xl mb-[1rem] text-[#135880] '>Electronics</h1>
      <div className='grid grid-cols-4  p-4 pl-[140px] ' >
        {
          data.slice(8, 14).map((item, id) => {
            return (
              <div className='mt-[-4] pl-[-10px] h-auto  mb-[2rem] w-[270px] bg-white rounded-xl'>
                <div className='mt-[-4] pl-[-10px] h-[265px] w-[250px] pl-9 bg-white  rounded-xl p-3 pt-4 '>
                  <Link to={`/products/${item.id}`}>
                    <img src={item.image} alt='load' className='h-[230px] w-full  mt-3 hover:scale-125 transform transition-all rounded-xl ' />
                  </Link>
                </div>
                <div className="border mb-4 grid-rows-5">

                  <h1 className='text-[green] font-bold'> ${item.price} </h1>
                  <h1 className='text-[#7a4231] font-extrabold mt-3 '>Rating - {item.rating.rate} </h1>
                  <img src={slide} alt='add to cart' className='w-[9.9rem] ml-[3.3rem] hover:scale-110 ' onClick={() => handleProductClick(data)} />
                  <h1 className='text-[#135880] font-extrabold mt-3 '> {item.title} </h1>


                </div>
              </div>
            )
          })
        }

      </div>


    </div>




  </>
  )
}


export default ProductList