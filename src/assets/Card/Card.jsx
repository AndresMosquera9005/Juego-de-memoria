import React from "react"
import "../Card/Card.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import imgFelipe from "../../images/felipe.jpg";


const CardStyle = () => {
  return(
    <div class="container">

    <div class="row">
      <div class="col-3">
        <img src="" alt="" />
      </div>
      <div class="col-3">
        <img src="" alt="" />
      </div>
      <div class="col-3">
       <img src="" alt="" />
      </div>
      <div clas="col-3">
        <img src="" alt="" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <img src={imgFelipe} alt="LFMR" />
      </div>
      <div class="col-5">
        <img src="../../images/andres.jpg" alt="JAMR" />
      </div>
      <div class="col">
        3 of 3
      </div>
    </div>
  </div>
  )

}

export default CardStyle