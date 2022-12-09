import React from 'react'
import './input.css';
export const Input = (props) => {
  return (
    <div className='input'>
        <h3>{props.text}</h3>
        <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} required />
    </div>
  )
}
