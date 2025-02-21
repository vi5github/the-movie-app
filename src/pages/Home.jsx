import React from 'react'
import SearchForm from '../components/SearchForm'
import MovieList from '../components/MovieList'

export function loader({request}){
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search");
    return null;
}

function Home() {
  return (
    <div>
        HomePage
        <SearchForm/>
        <MovieList />
    </div>
  )
}

export default Home
