import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


const MasterLayout = (props) => {
  return (
    <nav>
        <Link to="/">Movie Search</Link>
        <Outlet/>
    </nav>

  )
}

export default MasterLayout