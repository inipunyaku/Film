import axios from "axios";

const url = process.env.REACT_APP_LINK;
const apikey = process.env.REACT_APP_TOKEN_ACCESS;

const getMovieList = async () => {
  const movie = await axios.get(`${url}`, {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2IyMzhlYmJkYjhjOWJkYjE4MmFkMDYyOGU4Nzc2OCIsInN1YiI6IjY0NjRlZWZhNDRhNDI0MDBlNGI4NDdjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p3mAsPtrZMsAIQ2sR9ZfMoBrK6UkD3b6ugvdysGz7ss",
    },
  });
  return movie.data.results;
};

const searchMovie = async (q) => {
  // console.log(q);
  const search = await axios.get(
    "https://api.themoviedb.org/3/search/movie?query=" + q,
    {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2IyMzhlYmJkYjhjOWJkYjE4MmFkMDYyOGU4Nzc2OCIsInN1YiI6IjY0NjRlZWZhNDRhNDI0MDBlNGI4NDdjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p3mAsPtrZMsAIQ2sR9ZfMoBrK6UkD3b6ugvdysGz7ss",
      },
    }
  );
  // console.log(search.data.results);

  return search.data.results;
};

export { getMovieList, searchMovie };
