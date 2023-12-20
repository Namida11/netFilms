import React from 'react'


function Button(props) {
     console.log(props.children)
  return (

    <button className='bg-blue-500 text-white p-2 rounded'>{props.children}</button>
    
  )
}

export default Button