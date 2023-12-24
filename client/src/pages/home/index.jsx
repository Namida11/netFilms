import React from 'react'
import Header from "../../components/layout/header/index";
import Footer from '../../components/layout/footer/index';
import Categories from '../../components/categories';
import MovieList from '../../components/movies/movieList';
import FavoriList from '../../components/favoriList';
function Home() {
  return (
    <>
    <div className='w-10/12 mx-auto  '>
        <Header  />
        <FavoriList/>
        <Categories/>
        <MovieList/>
        <Footer/>
       
    </div>
     
    </>
        
  )
}

export default Home