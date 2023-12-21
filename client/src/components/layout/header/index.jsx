import React from 'react'
import Input from '../../UI/input'
import user from './user.svg'
import search from './search.svg'

function Header() {
  return (
    <>
       <div className=' text-white flex items-center  justify-between font-mono py-5 '>
        <div className='flex  items-center leftSide'>
          <div className="logo">
            <a href="" className=' text-3xl fw-bold'>
            NETFILM
            </a>
          </div>
        </div>

        <div className='relative'>
           <Input placeholder={"Search..."} className={"w-[300px] "}/>
           <img src={search} alt="" className='w-[25px] h-[25px] absolute top-1 right-2 cursor-pointer' />
        </div>

        <div className='flex gap-5 items-center rightSide'>
          <div className='  '>
           <ul className='flex gap-4 text-[16px]'>
              <li> <a href="" className='transition duration-700 hover:text-[red]'> MOVIES</a></li>
              <li><a href="" className='transition duration-700 hover:text-[red]'>SERIES</a> </li>
              <li> <a href="" className='transition duration-700 hover:text-[red]'>KIDS</a></li>
              
            </ul>
          </div>
          <div  className='account '>
            <img src={user} alt="" width={30} height={30} className='cursor-pointer '/>
          </div>
        </div>
       </div>
      
    </>
   
  )
}

export default Header