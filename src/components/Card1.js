import React from 'react'
import logo from '../images/card1logo.png'
const Card1 = () => {
  return (
    <>
    <div class="card">
  <div class="card-body">
    <h5 class="card-title">Services</h5>
    <img height="50px" width="50px" src={logo}/>
    <h6 class="card-subtitle mb-2 text-muted">Suspendisse Sollicitudin 
    <br /><span class="card-text">Duis Vitae Semper turpis</span></h6>
    <hr/>
    <p class="card-text">Sodes Fermentum 
    <br/>Qquam integer 
    <br/>Nibh Arcu </p>
    
   
  </div>
</div>

    
    </>
  )
}

export default Card1