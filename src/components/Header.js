import React from 'react'
import Nav from './Nav'
import image from '../images/background.jpg'
import Cards from './Cards'

const Header = () => {
  return (
   <>
   <div className='header'>
    
    <div className='nav'> <Nav/></div>
    <div className='cards'>  <Cards/></div>
   </div>
   </>
  )
}

export default Header