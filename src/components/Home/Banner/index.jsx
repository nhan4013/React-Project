import React from 'react'
import './styles.css'
import bannerImg from './banner.png'
import Logo from '../Logo'
export const Banner = ({handleScrollMenu}) => {
  return (
    <header>
        <div className='header-content'> 
          <Logo/>
          <div className='content-main'>
            <h1>Delicious food for your cravings</h1>
            <p>We make fresh and healthy meals with different recipes</p>
            <button onClick={handleScrollMenu}>
             View Menu <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <img src={bannerImg} alt='banner' className='header-img'/>
    </header>
  )
} 

export default Banner
