import React from "react";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
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
        <section className="favori-sec py-7">
          <h3 className="font-bold text-[27px] my-7 border-b border-[red] border-b-[2px] inline-block">
            Favorites
          </h3>
          <div className="lists-wrapper ">
            <ul className="all-list flex  gap-5 flex-wrap 	">
              <li className="border rounded-t-lg relative">
                <p className="text-White-500 cursor-pointer absolute top-[-18px] right-[20px] font-bold text-[45px]">
                  -
                </p>

                <h1 className="text-[25px] text-center border bg-[red] text-[black]font-bold rounded-t-lg">
                  listName
                </h1>
                <ul className="list flex gap-10 flex-col p-4 ">
                  {favorites.map((favorite) => (
                    <li key={favorite.id} className="flex ">
                      <div className="first flex items-center justify-between gap-4 ">
                        <a
                          href={`https://www.themoviedb.org/movie/${favorite.id}`}
                          className="w-[40px] h-[40px]"
                        >
                          <img
                            src={`${baseURL}original${favorite.poster_path}`}
                            className="w-full h-full rounded-full"
                          />
                        </a>
                        <p className="max-w-[180px] text-[15px]">
                          {favorite.title}
                        </p>
                        <FontAwesomeIcon
                          icon={faTimes}
                          className="text-White-500 cursor-pointer"
                          onClick={() => handleRemoveFromFavorites(favorite)}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
              
            </ul>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Favori;
