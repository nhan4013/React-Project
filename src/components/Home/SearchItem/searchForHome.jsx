import React from 'react'
import './stylesHome.css'


const SearchForHome = ({input,handleChange,handleClick}) => {
  return (
    <div className="topnav">
    <form className="search-container">
      <input type="text" placeholder="Search.." name="search" value={input} onChange={handleChange}/>
      <button><i className="fa fa-search" onClick={handleClick}></i></button>
    </form>
  </div>
  )
}

export default SearchForHome