import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import EmptyCartImg from './pngfind.com-cart-png-2727925.png'
import './styles.css'
const EmptyCart = () => {
    let navigate=useNavigate();
  return (
    <div className='emptyCart'>
        <img src={EmptyCartImg} alt='Empty Cart'/>
        <nav>
            <button onClick={()=>navigate('/')}>
                <i class="fa-solid fa-arrow-left"></i>
                Shop Now
            </button>
        </nav>          
    </div>
  )
}

export default EmptyCart