import React from 'react'
import SearchForm from '../components/SearchForm'
import MovieList from '../components/MovieList'
import { apiKey } from '../constants';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

export async function loader({request}){
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search");
    const movieSearchEndpoint = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;
    const response = await axios.get(movieSearchEndpoint);
    // console.log(response)
    return {movieApiResponse : response.data};
}

function Home() {
  const data = useLoaderData();
  return (
    <div>
        HomePage
        <SearchForm/>
        <MovieList data={data}/>
    </div>
  )
}

export default Home
