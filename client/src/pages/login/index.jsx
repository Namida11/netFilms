import React from 'react'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'

function Login() {
  return (
   <>
   <div className='w-10/12 mx-auto'>
      <Header/>
      <section className='login-section'>
          <div className='text-white'>login</div>
      </section>
      <Footer/>
   </div>
  
   </>
  )
}

export default Login