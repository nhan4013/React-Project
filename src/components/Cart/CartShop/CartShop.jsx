import React from 'react'
import { connect } from 'react-redux'
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../../redux/cart/cart.selector'
import Footer from '../../Home/Footer'
import Logo from '../../Home/Logo'
import Menu from '../../Home/Menu'
import SearchItem from '../../Home/SearchItem'
import EmptyCart from '../EmptyCart/EmptyCart'
import './styles.css'

const CartShop = ({ cartCount, cartList, cartTotal,input }) => {
    
const filterSearch=cartList.filter(item=>{
    if(input===""){
        return item
    }
    else{
        return item.name.toLowerCase().includes(input)
    }
})
  return (
    <div>
        <div className='cart-header'>
            <Logo/>
        </div>
        {cartCount===0?(<EmptyCart/>):
        (<div className='orders'>
            <h1 className='orders-heading'>Your Orders</h1>
            <div className='orders-menu'>
                <Menu list={filterSearch}/>
            </div>
            <h3 className='orders-total'>Your Total {`$ ${cartTotal}`}</h3>
        </div>)}
        <Footer/>
    </div>
  )
}

const mapStateToProps = (state) => ({
    cartCount:selectCartItemsCount(state),
    cartList:selectCartItems(state),
    cartTotal:selectCartTotal(state)
});



const CartShopContainer= connect(mapStateToProps)(CartShop);

export default CartShopContainer