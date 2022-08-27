import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux';
import { selectCartItems } from '../../../redux/cart/cart.selector';
import CartShopContainer from '../../Cart/CartShop/CartShop';
import './styles.css'

const SearchItem = () => {
  const [input,setInput] =useState("");
  const handleChange=(evt)=>{
    setInput(evt.target.value.toLowerCase())
  }
  return (
    <div className="topnav">
    <div className="search-container">
    <form>
      <input type="text" placeholder="Search.." name="search" value={input} onChange={handleChange}/>
      <button type="submit"><i className="fa fa-search"></i></button>
    </form>
  </div>
  <CartShopContainer input={input}/>
  </div>
  )
}

export default SearchItem