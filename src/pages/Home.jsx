import React from 'react'
import SearchForm from '../components/SearchForm'
import MovieList from '../components/MovieList'
import { apiKey } from '../constants';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

export async function loader({request}){
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "One Piece";

    try {
      const movieSearchEndpoint = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;
      const response = await axios.get(movieSearchEndpoint);
      // console.log(response)
      return {
        movieApiResponse: response.data,
        searchTerm: searchTerm,
        isError: false,
        error: ""
      };
    } catch (error) {
      const ErrorMsg = error?.response?.data?.Error || error.message || "Something went wrong..."; 
      return {movieApiResponse :  null, searchTerm : searchTerm, isError : true, error: ErrorMsg}
    }
}

function Home() {
  const data = useLoaderData();
  return (
    <div>
        HomePage
        <SearchForm searchTerm={data.searchTerm}/>
        <MovieList data={data}/>
    </div>
  )
}

export default Home
