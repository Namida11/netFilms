import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart ,faStar } from '@fortawesome/free-solid-svg-icons';


function MovieList() {
  return (
    <>
    <section className='movies '>
         <div className='text-[white] text-center md:text-start'>
            <h2 className='text-[20px] border-b-2 border-red-500 font-bold py-2 pr-7 mb-10 inline-block'>Movies</h2>
            <ul className='flex gap-7  flex-wrap justify-center md:justify-start '>
                <li className='w-[150px]  border shadow-md rounded-md  relative'> 
                    <a href=" " className=' '>
                        <img src="https://m.media-amazon.com/images/M/MV5BMjIzOTY1YTYtNmRhMC00MzAxLWEzMzUtM2ZiMmYwNTY0MjMyXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_FMjpg_UX1000_.jpg" className='w-[100%] h-[100%] rounded-md' alt="" />
                    </a>
                    <div className='absolute top-0 left-0 w-[100%] h-[100%] flex items-center justify-center bg-black bg-opacity-70'>
                        <ul className='flex gap-6  '>
                            <li>
                                 <FontAwesomeIcon icon={faHeart} className="text-red hover:text-[red] text-[20px] cursor-pointer transition duration-700 md:text-[20px]" />
                            </li>
                             <li>
                                <span className=''>4.5</span>
                                 <FontAwesomeIcon icon={faStar} className="text-yellow  text-[26px] cursor-pointer transition duration-700 md:text-[16px]" />
                            </li>
                        </ul>
                        
                    </div>

                </li>
                  <li className='w-[150px] border  shadow-md rounded-md'> 
                    <a href=" ">
                        <img src="https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg" alt="" className='w-[100%] h-[100%] rounded-md' />
                    </a>
                </li>
                <li className='w-[150px]  border shadow-md rounded-md'> 
                    <a href=" ">
                        <img src="https://m.media-amazon.com/images/M/MV5BYmRiYjQ0OGQtYTAzMi00OGVjLWE4YTQtM2Q4YjBlZTBhMWM5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg" alt="" className='w-[100%] h-[100%] rounded-md' />
                    </a>
                </li>
                  <li className='w-[150px] border  shadow-md rounded-md'> 
                    <a href=" ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbk-yBF6p96_GOBOmT3UDF0kthjFtnKj1Qhvnkf5E59NFGRaX3haTAyw9zXsYq7vyeLTo&usqp=CAU" className='w-[100%] h-[100%] rounded-md' alt="" />
                    </a>
                </li>
                <li className='w-[150px]  border shadow-md rounded-md'> 
                    <a href=" ">
                        <img src="https://m.media-amazon.com/images/M/MV5BMjIzOTY1YTYtNmRhMC00MzAxLWEzMzUtM2ZiMmYwNTY0MjMyXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_FMjpg_UX1000_.jpg" alt="" className='w-[100%] h-[100%] rounded-md' />
                    </a>
                </li>
                  <li className='w-[150px] border  shadow-md rounded-md'> 
                    <a href=" ">
                        <img src="https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg" alt="" className='w-[100%] h-[100%] rounded-md' />
                    </a>
                </li>
                <li className='w-[150px] border  shadow-md rounded-md'> 
                    <a href=" ">
                        <img src="https://m.media-amazon.com/images/M/MV5BMjIzOTY1YTYtNmRhMC00MzAxLWEzMzUtM2ZiMmYwNTY0MjMyXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_FMjpg_UX1000_.jpg" alt="" className='w-[100%] h-[100%] rounded-md' />
                    </a>
                </li>
                  <li className='w-[150px] border  shadow-md rounded-md'> 
                    <a href=" ">
                        <img src="https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg" alt="" className='w-[100%] h-[100%] rounded-md' />
                    </a>
                </li>
                 <li className='w-[150px]  border shadow-md rounded-md'> 
                    <a href=" ">
                        <img src="https://m.media-amazon.com/images/M/MV5BYmRiYjQ0OGQtYTAzMi00OGVjLWE4YTQtM2Q4YjBlZTBhMWM5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg" alt="" className='w-[100%] h-[100%] rounded-md' />
                    </a>
                </li>
                  <li className='w-[150px] border  shadow-md rounded-md'> 
                    <a href=" ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbk-yBF6p96_GOBOmT3UDF0kthjFtnKj1Qhvnkf5E59NFGRaX3haTAyw9zXsYq7vyeLTo&usqp=CAU" className='w-[100%] h-[100%] rounded-md' alt="" />
                    </a>
                </li>
                 
                  
            </ul>
         </div>
    </section>
    </>
   
  )
}

export default MovieList