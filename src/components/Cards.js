import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'


const Cards = () => {
  return (
    <>
    <div className='container-fluid cardDiv'>
        <div className='row'>
            <div className='col-md-2'> </div>
            <div className='col-md-2'><Card1/> </div>
            <div className='col-md-2'><Card2/> </div>
            <div className='col-md-2'><Card3/> </div>
            <div className='col-md-2'><Card4/> </div>
            <div className='col-md-2'> </div>
        </div>
    </div>
    </>
  )
}

export default Cards