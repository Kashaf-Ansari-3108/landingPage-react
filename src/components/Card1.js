import React from 'react'
import logo from '../images/card1logo.png'
const Card1 = () => {
  return (
    <>
    <div className="card">
  <div className="card-body">
    <h5 className="card-title">Services</h5>
    <img height="50px" width="50px" src={logo}/>
    <h6 className="card-subtitle mb-2 text-muted">Suspendisse Sollicitudin 
    <br /><span className="card-text">Duis Vitae Semper turpis</span></h6>
    <hr/>
    <p className="card-text">Sodes Fermentum 
    <br/>Qquam integer 
    <br/>Nibh Arcu </p>
    
   
  </div>
</div>

    
    </>
  )
}

export default Card1