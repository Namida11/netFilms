import React from 'react'

function Input({ value, onChange, placeholder, className}) {
  return (
    <>
       <input  type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder} 
        className={`  font-thin	 rounded px-6 py-1 focus:outline-none ${className}`} 
        />
    </>
 
      
  )
}

export default Input