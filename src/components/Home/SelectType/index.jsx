import React from 'react'
import { useState } from 'react'
import './styles.css'

const SelectType = ({types,handleTypes}) => {
    const [value,setValue]=useState(0);

    const handleValue=(index)=>{
        setValue(index);
    }
  return (
    <section className='section'>
    <div className='jobs-center'>
    <div className='btn-container' >
    {types.map((type,index)=>{
        return(
            <button type='button'
            key={index}
            className={`job-btn ${index===value && 'active-btn'}`}
            onClick={()=>{handleTypes(type);handleValue(index);}}
            >
                <h5>{type}</h5>
            </button>
        )
    })}
    </div>
    </div>
    </section>
  )
}

export default SelectType