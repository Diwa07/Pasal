import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const DetailsPage = () => {
  const [data, setData] = useState([])
  const params = useParams();

// const { category, title,price, image, description} = data ;
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`) ;
       console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



useEffect(() => {
  fetchData()
}, [] )

return (<>
  <div className='h-screen w-full bg-[gray] justify-center text-center  ' >


<h1 className='text-3xl'> Product Details</h1>
    <div className=' h-auto  grid grid-cols-1   p-5 '   > 

                        <div className='mt-[-4] pl-[-10px] h-[auto] flex flex-row  grid grid-cols-2 w-auto mr-8 bg-white rounded-xl mt-8'>
                            
                           <div className='  flex-column mt-[-4] pl-[-10px] h-full w-auto bg-white  rounded-xl p-7 pt-4 '>
                           <h1 className='text-[#135880] font-extrabold  ml-[2rem] mb-7 break-normal text-3xl '>{data.title} </h1>
                           <img src={data.image} alt='load' className='object-fill ml-[13rem]  h-[250px] w-[10rem] rounded-lg ' />
                           <h1 className='text-[green] font-bold ml-[3rem] mt-7 text-3xl font-extrabold'> ${data.price} </h1>
                         

                           </div>
                           
                           <div className='text-[#135880] break-normal  text-2xl font-extrabold  mb-3 mt-[3rem]  h-auto w-[25rem] ml-[7rem] '>
                            {data.description}
                            
                           </div>

                        </div>

                  
            
          

        <div>
        </div>


   
</div>
</div>
</>
)}

export default DetailsPage