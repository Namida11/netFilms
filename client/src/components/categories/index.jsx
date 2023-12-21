import React from 'react'
import Button from '../UI/button/index'

function Categories() {
  return (
   <>
    <section className='categories-sec py-7 my-3'>
      <div className='w-100%'>
        <ul className='flex  gap-4 text-[10px] md:text-[14px] flex-wrap '>
          <li className=' w-[80px] md:w-[120px] '>
            <Button className={`w-[100%] px-2 hover:bg-opacity-30`}>{'Adventure'}</Button>
          </li>
          <li className='w-[80px] md:w-[120px]'>
            <Button className={`w-[100%]`}>{'Animation'}</Button>
          </li>
          <li className='w-[80px] md:w-[120px]'>
            <Button className={`w-[100%]`}>{'Comedy'}</Button>
          </li>
          <li className='w-[80px] md:w-[120px]'>
            <Button className={`w-[100%]`}>{'Crime'}</Button>
          </li>
          <li className='w-[80px] md:w-[120px] '>
            <Button className={`w-[100%] `}>{'Documentary'}</Button>
          </li>
        </ul>
      </div>
    </section>
   </>
  )
}

export default Categories