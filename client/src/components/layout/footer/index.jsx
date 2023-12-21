import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faInstagram, faLinkedin, faGithub, faYoutube   } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <>
      <section className='footer'>
            <div className="social flex  items-center gap-4 border-b-[1px] py-5">
                <h3 className='text-[white] text-[18px]'>Follow us</h3>
                <ul className='flex items-center gap-5'>
                    <li>
                        <a href="">
                          <FontAwesomeIcon icon={faTwitter} className="icon-style " />
                        </a>
                    </li>
                    <li>
                        <a href="">
                          <FontAwesomeIcon icon={faInstagram} className="icon-style" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                          <FontAwesomeIcon icon={faLinkedin} className="icon-style" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                          <FontAwesomeIcon icon={faGithub} className="icon-style" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                          <FontAwesomeIcon icon={faYoutube} className="icon-style" />
                        </a>
                    </li>
                </ul>
            </div> 
            <div className='pt-6  flex justify-between items-center '> 
                <label htmlFor="" className='flex flex-row items-center gap-4 border border-color-white-500 w-[85%] py-3 rounded-sm'>
                    <FontAwesomeIcon icon={faEnvelope} className="icon-style px-2 cursor-pointer" />
                    <input type="email" placeholder='Sign up for updates on our latest innovations' className='text-white  w-[80%] outline-none bg-transparent   ' />
                </label>
                <button className='text-white text-[18px] font-bold	 bg-transparent border border-color-white font-mono py-[10px] px-[30px] transition duration-700 hover:bg-[red] rounded-md hover:text-white'>Sign in</button>
            </div>
            <div className='text-white text-[12px] text-center py-3 font-mono'>
                <p>NETFILM ©ALL RIGHTS RESERVED</p>
            </div>
      </section>
        
        
    </>
  )
}

export default Footer