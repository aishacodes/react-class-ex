import React from 'react'


const Search = ({handlesearch}) => {

  return(
    <p>Filter shown with <input type="search" onChange={handlesearch} /></p>
  )
}
export default Search