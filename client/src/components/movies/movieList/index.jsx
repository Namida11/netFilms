import React, { useEffect ,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { setMovies,addToFavorites } from "../../../store/moviesSlice";


import "react-toastify/dist/ReactToastify.css";

function MovieList() {
   const [displayedMovies, setDisplayedMovies] = useState([]);
    const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  const baseURL = "https://image.tmdb.org/t/p/";

   const [favoriteMovies, setFavoriteMovies] = useState({});
     const [isFavorited, setIsFavorited] = useState(false);

   const addFav = (movie) => {
    const isFavorited = favoriteMovies[movie.id]?.isFavorited || false;
    dispatch(addToFavorites(movie)); // Yeni aksiyonu çağır
    setFavoriteMovies({
      ...favoriteMovies,
      [movie.id]: { ...movie, isFavorited: !isFavorited },
    });
    toast.success(`${movie.title} favoriye ${isFavorited ? "çıkarıldı" : "eklendi"}!`);
    console.log(isFavorited)
  };
 
  useEffect(() => {
    // API'den film verilerini al
    const genreId = 12;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=9a1e397cb05b1da55c7ea902a0b9446c&query=${encodeURIComponent("Harry potter")}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // OMDb API'nin döndüğü veri içerisinde Search adlı bir özellik var
        dispatch(setMovies(data.results || []));
        setDisplayedMovies(data.results.slice(0, 15));
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, [dispatch]);

  return (
    <>
      <section className="movies bg-[black] bg-opacity-100">
        <div className="text-[white] text-center md:text-start">
          <h2 className="text-[20px] border-b-2 border-red-500 font-bold py-2 pr-7 mb-10 inline-block">
            Movies
          </h2>
          <ul className="flex gap-7  flex-wrap justify-center md:justify-start">
            {displayedMovies.map((movie) => (
              <li
                key={movie.id}
                className="movie-list w-[200px] h-[300px] border shadow-md rounded-md"
              >
              
                <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
                  <img
                    src={`${baseURL}original${movie.poster_path}`}
                    className="w-[100%] h-[100%] rounded-md"
                    alt={movie.title}
                  />
                </a>
                <div key={movie.id} className=" review  hover:top-0 hover: right-0 w-[30%] h-[100%] flex items-center justify-center bg-black bg-opacity-90 rounded-md">
                  <ul className="flex flex-col gap-6  ">
                    <li>
                      <FontAwesomeIcon
                        icon={faHeart}
                        className={`text-${isFavorited ? "[red]" : "[white]"} text-[20px] cursor-pointer transition duration-500 md:text-[20px]`}
                         onClick={() => addFav(movie)}
                      />
                    </li>
                    <li>
                      <span className="">4.5</span>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="star text-[26px] cursor-pointer transition duration-700 md:text-[16px]"
                      />
                    </li>
                  </ul>
                </div>
                <ToastContainer/>
              </li>

            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default MovieList;
