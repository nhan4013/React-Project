import React from 'react'
import { connect } from 'react-redux';
import { cartAddItem, cartRemoveItem } from '../../../../redux/cart/cart.action';
import { selectCartItems, selectCartItemsCount} from '../../../../redux/cart/cart.selector';
import ButtonAddRemoveItem from '../../ButtonAddRemoveItem';

import './styles.css'

const MenuItem = ({item,addItem,removeItem,cartCount,cartList}) => {
  const {id,name,info,price,img}=item;
  const g=cartList.filter((item)=>item.id===id)
  if(g.length!==0){
    console.log(g[0].quantity);
  }

  const handleQuantity=()=>{
    let qty=0;
    if(cartCount!==0){
      const cartItem=cartList.filter((item)=>item.id===id);
      if(cartItem.length!==0){
        qty=cartItem[0].quantity;
      }
    }
    return qty;
  };
  
  return (
    <div className='item' key={id}>
       <img src={img} alt='item'/>
       <div className='item-head_desc'>
          <p className='head_desc-name'>{name}</p>
          <p className='head_desc-info'>
            <small>{info}</small>
          </p>
       </div>
       <div className='item-foot_desc'>
          <span className='foot_desc-price'>${price}</span>
         <ButtonAddRemoveItem 
          quantity={handleQuantity()} 
          handleRemoveItem={() => removeItem(item)}
          handleAddItem={() => addItem(item)} />
       </div>
    </div>
  )
}

const mapStateToProps = (state)=>{
  return {
    cartCount: selectCartItemsCount(state),
    cartList: selectCartItems(state),
  }
};

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(cartAddItem(item)),
    removeItem: (item) => dispatch(cartRemoveItem(item)),
});

const MenuItemContainer= connect(mapStateToProps,mapDispatchToProps)(MenuItem);

export default MenuItemContainer;