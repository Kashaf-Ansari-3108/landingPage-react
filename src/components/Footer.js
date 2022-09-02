import React from 'react'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import Footer3 from './Footer3'

const Footer = () => {
  return (
    <>
    <div className='container-fluid footer'>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-3'> <Footer1/> </div>
          <div className='col-md-3'> <Footer2/> </div>
          <div className='col-md-3'> <Footer3/> </div>
          <div className='col-md-2'></div>
        </div>
    </div>
    
    </>
  )
}

export default Footer