import React, { useRef } from 'react'
import { useState } from 'react'
import Banner from '../../components/Home/Banner'
import CartCountButton from '../../components/Home/CartCountButton'
import Footer from '../../components/Home/Footer'
import Menu from '../../components/Home/Menu'
import { menuItemsData, type } from '../../components/Home/Menu/data'
import SelectType from '../../components/Home/SelectType'
import "./styles.css"

const Home = () => {
  const menuRef=useRef(null);
  const [menu,setMenu]=useState(menuItemsData);

  const handleScrollMenu=()=>{
    menuRef.current.scrollIntoView({behavior:'smooth'});
  }
 
  const handleTypes=(type)=>{
    if(type==='All'){
      setMenu(menuItemsData);
      console.log(menu);
    }
    else{
    const a= menuItemsData.filter(item=>item.type===type)
    setMenu(a);
    }
  }

  return (
   <div>
    <Banner handleScrollMenu={handleScrollMenu}/>
    <SelectType types={type} handleTypes={handleTypes}/>
    <Menu list={menu} ref={menuRef}/>
    <Footer/>
    <CartCountButton />
   </div>
  )
}

export default Home