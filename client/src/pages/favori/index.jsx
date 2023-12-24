import React from "react";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes,faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector,useDispatch  } from "react-redux";
import { removeFromFavorites } from "../../store/moviesSlice";

function Favori() {
  const baseURL = "https://image.tmdb.org/t/p/";
   const favorites = useSelector((state) => state.movies.favorites);
    const dispatch = useDispatch();

  const handleRemoveFromFavorites = (movie) => {
    dispatch(removeFromFavorites(movie));
  };
   
  return (
    <>
      <div className="w-10/12 mx-auto">
        <Header />
        <section className="favori-sec ">
          <h3>Favorites</h3>
          <div className="lists-wrapper ">
            <ul className="lists flex gap-10 ">
            {
              favorites.map((favorite)=>(
                 <li  key={favorite.id} className="flex " >
                    <div className="first flex flex-col">
                      <a href={`https://www.themoviedb.org/movie/${favorite.id}`} className="w-[100px] h-[200px]">
                        <img src={`${baseURL}original${favorite.poster_path}`} className="w-full h-full" />
                      </a>
                       <p>{favorite.title}</p>
                    </div>
                   
                    <div>
                      <FontAwesomeIcon icon={faTimes} className="text-White-500 cursor-pointer"
                       onClick={() => handleRemoveFromFavorites(favorite)}
                      />
                    </div>

                  </li>
             ))
            } 
                
        
           
            </ul>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Favori;
