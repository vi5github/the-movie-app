import React from 'react'
import { Form } from 'react-router-dom'

const SearchForm = ({searchTerm}) => {
  return (
    <Form method='GET'>
        <input type="text" name="search" id="search" defaultValue={searchTerm} required/>  
        {/* yaha pe name attribute dena important hai kyuki isse se searchQuery banti hai, jo name attribute mein hoga voh query parameter mein dikhega  */}
        <button type='submit'>Search</button>
    </Form>
  )
}

export default SearchForm