import logo from "./logo.svg";
import "./App.css";
import { getMovieList, searchMovie } from "./api";
import { useEffect, useState } from "react";

function App() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovieList().then((res) => {
      setMovie(res);
    });
  }, []);

  // console.log(movie);

  const MovieList = () => {
    return movie.map((res, i) => {
      return (
        <div className="movie-wrapper" key={i}>
          {console.log(res)}
          <div className="movie-title"> {res.title}</div>
          <img
            className="movie-image"
            src={"https://image.tmdb.org/t/p/w500/" + res.poster_path}
            alt=""
            srcset=""
          />
          <div className="movie-date">{res.release_date}</div>
          <div className="movie-rate">{res.vote_average}</div>
        </div>
      );
    });
  };

  const search = async (e) => {
    if (e.length > 3) {
      const result = await searchMovie(e);
      setMovie(result);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Movie List</h3>

        <input
          placeholder="Searchhh"
          className="movie-search"
          onChange={(target) => {
            search(target.target.value);
          }}
        />
        <div className="movie-container">
          <MovieList />
        </div>
      </header>
    </div>
  );
}

export default App;
