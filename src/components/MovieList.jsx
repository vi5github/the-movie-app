import React from 'react'

const MovieList = ({data}) => {
  const {movieApiResponse} = data;
  // console.log(movieApiResponse);
  if(movieApiResponse && movieApiResponse.Response === 'False'){
    return <h1>{movieApiResponse.Error || "No Result Found"}</h1>
  }

  return (
    <>
    {
      movieApiResponse.Search.map(movie => (<p>
        {movie.Title}
      </p>))
    }
    </>
    // <div>MovieList</div>
  )
}

export default MovieList