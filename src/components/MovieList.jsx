import React from 'react'
import MovieCard from './MovieCard';
import styles from './movieList.module.css'

const MovieList = ({data}) => {
  const {movieApiResponse, error, isError} = data;
  // console.log(movieApiResponse);
  //This is the case to when we get error due to some api issues
  if(isError){
    return <h1>{error}</h1>
  }
  //This is the case when the user Enter Random/Gibrish words in the search Box
  if(movieApiResponse && movieApiResponse.Response === 'False'){
    return <h1>{movieApiResponse.Error || "No Result Found"}</h1>
  }

  return (
    <div className={`container ${styles.moviesList}`}>
    {
      movieApiResponse.Search.map((movie, index) => (
        <MovieCard key={index} {...movie}/>
      ))
    }
    </div>
  )
}

export default MovieList