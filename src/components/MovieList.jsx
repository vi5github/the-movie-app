import React from 'react'

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