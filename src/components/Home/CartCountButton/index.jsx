import React from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { selectCartItemsCount } from '../../../redux/cart/cart.selector';
import './styles.css'
const CartCountButton = ({cartCount}) => {
  let navigate=useNavigate();
  return (
    <div className='nbCartCount' onClick={()=>navigate('/cart')}>
       <div className='count'>{(cartCount>=100?"99+":cartCount)}</div>
       <i class="fa-solid fa-cart-shopping"></i>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cartCount:selectCartItemsCount(state),
  }
}

export default connect(mapStateToProps)(CartCountButton)