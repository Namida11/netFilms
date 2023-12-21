import React from 'react'
import Input from '../../UI/input'
import user from './user.svg'
import search from './search.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <>
       <div className=' text-white flex items-center  justify-between font-mono py-5 '>
        <div className='flex  items-center leftSide'>
          <div className="logo">
            <a href="" className=' text-[40px] fw-bold'>
            NETFILM
            </a>
          </div>
        </div>

        <div className=''>
          <label htmlFor="" className='flex border border-white flex-row items-center gap-4  bg-white bg-opacity-10 shadow-xl'>
            <Input placeholder={"Search..."} className={"w-[280px] outline-none bg-transparent"}/>
               <FontAwesomeIcon icon={faSearch} className="text-white w-[18px] h-[20px] px-3 cursor-pointer" />
          
          </label>
           
        
        </div>

        <div className='flex gap-5 items-center rightSide'>
          <div className='  '>
           <ul className='flex gap-4 text-[15px]'>
              <li> <a href="" className='transition duration-700 hover:text-[red]'> MOVIES</a></li>
              <li><a href="" className='transition duration-700 hover:text-[red]'>SERIES</a> </li>
              <li> <a href="" className='transition duration-700 hover:text-[red]'>KIDS</a></li>
               <li> <a href="" className='transition duration-700 hover:text-[red]'> <FontAwesomeIcon icon={faHeart} className="text-red" /></a></li>
            </ul>
          </div>
          <div  className='account '>
             <FontAwesomeIcon icon={faUser} className="text-[16px] cursor-pointer transition duration-700 hover:text-[red]" />
            {/* <img src={user} alt="" width={30} height={30} className='cursor-pointer '/> */}
          </div>
        </div>
       </div>
      
    </>
   
  )
}

export default Header