import React from 'react'
import logo from '../images/content2logo.png'
const Content2 = () => {
  return (
    <>
    <div className='conDiv'>
    <h5><span>Solutions</span> for the Bottom Line</h5>
    <hr/>
    <img width="150px" height="100px"src={logo} alt="..."/>
    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <div className='rightBtn'>
    <button type="button" className="btn btn-light lg-shadow border-dark text-secondary">Read More</button>
    </div>
  </div>
    </>
  )
}

export default Content2