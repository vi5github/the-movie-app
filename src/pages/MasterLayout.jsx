import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';
import LoadingSpinner from '../assets/LoadingSpinner.svg'
import styles from './master.module.css'

const MasterLayout = (props) => {
  const navigation = useNavigation();
  return (
    <div>
      <nav className={`container ${styles.nav}`}>
          <Link to='/'>
              <h1>Movie Search</h1>
          </Link>
      </nav>
      {
        navigation.state === 'loading' ? (
          <img src={LoadingSpinner} 
          alt="" 
          className='loadingSpinner'  
          />
        ) : (
          <Outlet/>
        )
      }
     </div>
  )
}

export default MasterLayout