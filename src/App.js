import './App.css';
import { MovieForm } from './MovieForm/movieForm';
import { MoviesList } from './MoviesList/moviesList';
import { useState } from "react"

function App() {
  const [movies, setMovies] = useState([])

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie])
  }

  const deleteMovie = (movieId) => {
    let newMovies = movies.filter((movie) => {return movie.id != movieId})
    setMovies(newMovies)
  }
  return (
    <div className="App">
      <MoviesList movies={movies} deleteMovie={deleteMovie}/>
      <MovieForm addMovie={addMovie}/>
    </div>
  );
}

export default App;
