import React from 'react'
import './styles.css'
const ButtonAddRemoveItem = ({quantity,handleAddItem,handleRemoveItem}) => {
    console.log(quantity)
  return (
    <div className='btnAddRemove'>
        {quantity!==0?(
            <div className='btnAddRemove-positive'>
                <i className="fa-solid fa-minus" onClick={handleRemoveItem}></i>
                <span>{quantity}</span>
                <i className="fa-solid fa-plus" onClick={handleAddItem}></i>
            </div>
        ):(
            <div className='btnAddRemove-negative' onClick={handleAddItem}>
                <span>ADD</span>
                <i className="fa-solid fa-plus"></i>
            </div>
        )}
    </div>
  )
}

export default ButtonAddRemoveItem