import React from 'react'
import { apiKey } from './constants';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(<Route>

</Route>))

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App