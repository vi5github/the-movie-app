import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  const {
    Title = '',
    Year = '',
    imdbID = '',
    Type = '',
    Poster = ''
  } = props;

  return (
    <Link to={`details/${imdbID}`}>
        <p>{Title}</p>
    </Link>
  )
}

export default MovieCard