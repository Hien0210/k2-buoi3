import React from 'react'
import './styles.css'
const Input = (prop) => {
  return (
    <input type="text" placeholder={prop.title}/>
  )
}

export default Input