import React from 'react'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'

const Content = () => {
  return (
    <>
    <div className='container-fluid content'>
        <div className='row'>
            <div className='col-md-1'>  </div>
            <div className='col-md-3'> <Content1/> </div>
            <div className='col-md-3'> <Content2/> </div>
            <div className='col-md-4'> <Content3/> </div>
            <div className='col-md-1'>  </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Content