import React from 'react'
import logo from '../images/footer1logo.png'
const Footer1 = () => {
  return (
    <>
   <div className='one'>
    <img width="70px" height="70px"src={logo} alt="..."/>
    <h5><span>SUBSCRIBE</span><br/>GET NEWS LETTERS</h5>
    </div>
    <div className='two'>
    <input type="email" class="form-control" id="exampleFormControlInput1"/>
    <button type="button" class="btn text-light">Subscribe</button>
    </div>
  
    
    </>
  )
}

export default Footer1