import React from 'react'
import './styles.css'
import logo from './—Pngtree—chef silhouette vector object for_5280905.png'
const Logo = () => {
  return (
    <div className='logo'>
        <div>
          <img src={logo} alt='logo'/>
          <span>
            <strong>NP</strong>
          </span>
        </div>
        <p>
          <strong>Restaurant & Buffet</strong>
        </p>
    </div>
  )
}
console.log(1)
export default Logo