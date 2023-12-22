import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faInstagram, faLinkedin, faGithub, faYoutube   } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <>
      <section className='footer pt-[20px] '>
            <div className="social flex  items-center gap-4 border-b-[1px] py-5">
                <h3 className='text-[white]  text-[14px] md:text-[18px] '>Follow us</h3>
                <ul className='flex items-center gap-2 md:gap-5 icon-mobile  md:icon-style'>
                    <li>
                        <a href="">
                          <FontAwesomeIcon icon={faTwitter} className=" " />
                        </a>
                    </li>
                    <li>
                        <a href="">
                          <FontAwesomeIcon icon={faInstagram} className="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                          <FontAwesomeIcon icon={faLinkedin} className="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                          <FontAwesomeIcon icon={faGithub} className="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                          <FontAwesomeIcon icon={faYoutube} className="" />
                        </a>
                    </li>
                </ul>
            </div> 
            <div className='pt-6  flex flex-col justify-between items-center md:flex-row gap-5  '> 
                <label htmlFor="" className='flex flex-row items-center gap-4 border border-color-white-500 w-[100%] md:w-[85%] py-3 rounded-sm'>
                    <FontAwesomeIcon icon={faEnvelope} className="icon-mobile  md:icon-style px-2 cursor-pointer" />
                    <input type="email" placeholder='Sign up for updates on our latest innovations' className='text-white  w-[80%] text-[10px] lg:w-[100%] md:text-[16px] outline-none bg-transparent ' />
                </label>
                <button className='text-white text-[14px]   sm:text-[16px] font-bold bg-transparent border border-color-white font-mono py-[10px] w-[40%] md:w-[25%] transition duration-700 hover:bg-[red] rounded-md hover:text-white'>Sign in</button>
            </div>
            <div className='text-white text-[12px] text-center py-3 font-mono'>
                <p>NETFILM ©ALL RIGHTS RESERVED</p>
            </div>
      </section>
        
        
    </>
  )
}

export default Footer