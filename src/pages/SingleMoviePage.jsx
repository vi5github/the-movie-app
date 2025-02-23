import React from 'react';
import axios from 'axios';
import { apiKey } from '../constants';
import { useLoaderData } from 'react-router-dom';

export async function loader({params}){
  // console.log(args);
  const imdbId = params.imdbId;
  const URL = `https://www.omdbapi.com/?i=${imdbId}&plot=full&apikey=${apiKey}`
  try {
    const response = await axios.get(URL);
    // console.log(response)
    return {
      movie: response.data,
      isError: false,
      error: ""
    };
  } catch (error) {
    const errorMsg = error?.response?.data?.Error || error.message || "Something went wrong";
    return {
      movie: null,
      isError: true, 
      error: errorMsg
    };
  }
}

function SingleMoviePage() {
  const {movie: movieDetail, isError, error} = useLoaderData();
  //This code will execute when there is some issue with api, so we get error msg like invalid api key
  if(isError){
    return <h1>{error}</h1>
  } 
  //when the user enter incorrect imdb id by himself, then this code will get executed
  if (movieDetail && movieDetail.Response === 'False') {
    return <h1>{movieDetail.error}</h1>
  }
  return (
    <div>
      {
        movieDetail.Title
      }
    </div>
  )
}

export default SingleMoviePage
