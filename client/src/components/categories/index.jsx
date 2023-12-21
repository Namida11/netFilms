import React from 'react'
import Button from '../UI/button/index'

function Categories() {
  return (
   <>
    <section className='categories-sec py-7'>
      <div className='w-60%'>
        <ul className='flex gap-4 text-[14px] font-sans'>
          <li className='w-[10%]'>
            <Button className={`w-[100%]`}>{'Adventure'}</Button>
          </li>
          <li className='w-[10%]'>
            <Button className={`w-[100%]`}>{'Animation'}</Button>
          </li>
          <li className='w-[10%]'>
            <Button className={`w-[100%]`}>{'Comedy'}</Button>
          </li>
          <li className='w-[10%]'>
            <Button className={`w-[100%]`}>{'Crime'}</Button>
          </li>
          <li className='w-[10%]'>
            <Button className={`w-[100%]`}>{'Documentary'}</Button>
          </li>
        </ul>
      </div>
    </section>
   </>
  )
}

export default Categories