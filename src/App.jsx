import React from 'react'
import { apiKey } from './constants';
import Home from './pages/Home';
import SingleMoviePage from './pages/SingleMoviePage';
import MasterLayout from './pages/MasterLayout';
import Error from './pages/Error';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(<Route path = "/" element = {<MasterLayout/>}>
  <Route index path = "/" element={<Home/>} />
  <Route path = "/details/:imdbId" element = {<SingleMoviePage/>} />
</Route>))

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App