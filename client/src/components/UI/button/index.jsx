import React from 'react'


function Button(props) {
     console.log(props.children)
  return (

    <button className={`custom-button ${props.className}`}>{props.children}</button>
    
  )
}

export default Button