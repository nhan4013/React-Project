import React, { forwardRef } from 'react'
import './styles.css'
import MenuItemContainer from './MenuItem'
const Menu = forwardRef(({list},ref) => (
    <main ref={ref}>
       {list.map((item)=>{ 
        return <MenuItemContainer item={item}/>
       })}
    </main>
  ));

export default Menu;