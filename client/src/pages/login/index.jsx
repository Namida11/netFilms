import React from 'react'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope ,faEye} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Login() {
  return (
   <>
   <div className='w-10/12 mx-auto'>
      <Header/>
      <section className='login-section w-[100%] h-[100%] flex justify-center items-center my-10'>
          <form action="">
            <h1 className='text-[30px] text-center pb-4 mb-2'>LOGIN</h1>
            <div className='flex flex-col gap-8'>
              <label htmlFor="" className='flex gap-4 w-[350px] h-[100%] pb-2 border-b border-[grey] text-white'>
                <FontAwesomeIcon icon={faEnvelope} className="icon-mobile  md:icon-style px-2 cursor-pointer" />
                <input type="email" className='bg-transparent outline-none ' placeholder='Your Email'/>
              </label>
             <label htmlFor="" className='flex gap-4 w-[100%] h-[100%] border-b text-white pb-2'>
                <FontAwesomeIcon icon={faEye} className="icon-mobile  md:icon-style px-2 cursor-pointer" />
                <input type="password" className='bg-transparent outline-none ' placeholder='Your Password'/>
              </label>
              <button className='bg-[red] hover:bg-opacity-50 text-white rounded-3xl py-2 mt-3 text-[22px] font-mono font-bold transition duration-700'>LOG IN </button>
            </div>
            <p className='text-white text-[14px] py-4 '> 
            <Link to={"/register"} className='border-b transition duration-700 hover:text-[red] hover:border-[#da2c38]   '>
                Do you no have account?
            </Link>
             
            </p>
          </form>
      </section>
      <Footer/>
   </div>
  
   </>
  )
}

export default Login