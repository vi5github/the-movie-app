import React from 'react'
import { apiKey } from './constants';
import Home from './pages/Home';
import SingleMoviePage from './pages/SingleMoviePage';
import MasterLayout from './pages/MasterLayout';
import Error from './pages/Error';
import { loader as MovieLoader } from './pages/Home';
import { loader as SingleMovieLoader } from './pages/SingleMoviePage';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
<Route path = "/" element = {<MasterLayout/>} errorElement={<Error/>}>
  <Route index path = "/" element={<Home/>} loader={MovieLoader} />
  <Route path = "/details/:imdbId" element = {<SingleMoviePage/>} loader={SingleMovieLoader} />
</Route>))

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App