import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes,faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import toggleSlideBar  from "../../store/sideBarSlice";
import Button from '../UI/button/index'

function FavoriList() {
const dispatch = useDispatch();
  const isSlideBarOpen = useSelector((state) => state.slideBar.isSlideBarOpen);

  const handleSidebarToggle = () => {
    dispatch(toggleSlideBar());
  };
  return (
   <>
    <div className={` invisible fixed  z-50 top-0 right-0 border-[white] w-[230px] lg:w-[350px] h-full text-white bg-[black] sidebar ${isSlideBarOpen ? 'visible' : 'invisible'} ` }>
     <div className='relative  '>
        <div className='p-[20px] '>
          <span className=' absolute  w-[24px] h-[24px] top-3 left-0 p-2 rounded-full bg-[red] inline-block flex justify-center items-center'>
            <FontAwesomeIcon icon={faTimes} className="  text-White-500 cursor-pointer font-bold "
             onClick={handleSidebarToggle}
            />
          </span>
            
           <h2 className='py-4 text-center font-bold text-[20px] '>Create List</h2>
           <div className='border px-5 py-3 flex flex-col gap-6'>
             <label htmlFor="" className='flex flex-row items-center gap-4 border border-color-white-500 w-[100%] md:w-[100%] py-1 px-3 rounded-sm'>
                  
                    <input type="text" placeholder='listName' className='text-white  w-[100%] text-[10px] lg:w-[100%] md:text-[16px] outline-none bg-transparent ' />
                </label>
            <ul  className='hidden   lg:block gap-10 flex flex-col pb-3 max-h-[270px] overflow-y-auto scrollbar-thin scrollbar-thumb-[red]-500 scrollbar-track-[gray]-300'>
                <li className='flex justify-between items-center border-b pr-4 mb-3'>
                    <p>movie title</p>
                    <FontAwesomeIcon icon={faTimes} className="text-White-500 cursor-pointer duration-300	 hover:text-[red]"
                    
                    />
                </li>
                <li className='flex justify-between items-center border-b pr-4 mb-3'>
                    <p>movie title</p>
                    <FontAwesomeIcon icon={faTimes} className="text-White-500 cursor-pointer"
                    
                    />
                </li>
                <li className='flex justify-between items-center border-b pr-4 mb-3'>
                    <p>movie title</p>
                    <FontAwesomeIcon icon={faTimes} className="text-White-500 cursor-pointer"
                    
                    />
                </li>
                <li className='flex justify-between items-center border-b pr-4 mb-3'>
                    <p>movie title</p>
                    <FontAwesomeIcon icon={faTimes} className="text-White-500 cursor-pointer"
                    
                    />
                </li>
                <li className='flex justify-between items-center border-b pr-4 mb-3'>
                    <p>movie title</p>
                    <FontAwesomeIcon icon={faTimes} className="text-White-500 cursor-pointer"
                    
                    />
                </li>
                <li className='flex justify-between items-center border-b pr-4 mb-3'>
                    <p>movie title</p>
                    <FontAwesomeIcon icon={faTimes} className="text-White-500 cursor-pointer"
                    
                    />
                </li>  <li className='flex justify-between items-center border-b pr-4 mb-3'>
                    <p>movie title</p>
                    <FontAwesomeIcon icon={faTimes} className="text-White-500 cursor-pointer"
                    
                    />
                </li>
                <li className='flex justify-between items-center border-b pr-4 mb-3'>
                    <p>movie title</p>
                    <FontAwesomeIcon icon={faTimes} className="text-White-500 cursor-pointer"
                    
                    />
                </li>
                <li className='flex justify-between items-center border-b pr-4 mb-3'>
                    <p>movie title</p>
                    <FontAwesomeIcon icon={faTimes} className="text-White-500 cursor-pointer"
                    
                    />
                </li>
                <li className='flex justify-between items-center border-b pr-4 mb-3'>
                    <p>movie title</p>
                    <FontAwesomeIcon icon={faTimes} className="text-White-500 cursor-pointer"
                    
                    />
                </li>  <li className='flex justify-between items-center border-b pr-4 mb-3'>
                    <p>movie title</p>
                    <FontAwesomeIcon icon={faTimes} className="text-White-500 cursor-pointer"
                    
                    />
                </li>
                <li className='flex justify-between items-center border-b pr-4 mb-3'>
                    <p>movie title</p>
                    <FontAwesomeIcon icon={faTimes} className="text-White-500 cursor-pointer"
                    
                    />
                </li>
                <li className='flex justify-between items-center border-b pr-4 mb-3'>
                    <p>movie title</p>
                    <FontAwesomeIcon icon={faTimes} className="text-White-500 cursor-pointer"
                    
                    />
                </li>
                <li className='flex justify-between items-center border-b pr-4 mb-3'>
                    <p>movie title</p>
                    <FontAwesomeIcon icon={faTimes} className="text-White-500 cursor-pointer"
                    
                    />
                </li>
                <li className='flex justify-between items-center border-b pr-4 mb-3'>
                    <p>movie title</p>
                    <FontAwesomeIcon icon={faTimes} className="text-White-500 cursor-pointer"
                    
                    />
                </li>

                
               
            </ul>
           <ul  className=' lg:hidden mobile flex flex-col gap-6 pb-3 max-h-[270px] overflow-y-auto scrollbar-thin scrollbar-thumb-[red]-500 scrollbar-track-[gray]-300'>
                <li className='flex justify-between items-center border-b  pr-4'>
                 
                     <img src="https://tr.web.img2.acsta.net/r_1280_720/medias/nmedia/18/35/52/34/18866458.jpg" alt="" className='rounded-full w-[40px] h-[40px] mb-3' />
                    <FontAwesomeIcon icon={faTimes} className="text-White-500 cursor-pointer duration-300	 hover:text-[red]"
                    />
                </li>
                 <li className='flex justify-between items-center border-b pr-4'>
                 
                     <img src="https://tr.web.img2.acsta.net/r_1280_720/medias/nmedia/18/35/52/34/18866458.jpg" alt="" className='rounded-full w-[40px] h-[40px] mb-3' />
                    <FontAwesomeIcon icon={faTimes} className="text-White-500 cursor-pointer duration-300	 hover:text-[red]"
                    />
                </li>
            </ul>
            <div className='flex gap-3'>
                <Button className={`bg-green`}>{'Save'}</Button>
                 <Button className={` `}>{'Clear'}</Button>
            </div>
            
           </div>
           
            
           
        </div>
       
      
     </div>
    </div>
   </>
  )
}

export default FavoriList