import React from "react"
import "../Card/Card.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {imgFelipe2,imgAndres,imgJacko,imgKitty} from "../ExportImage"

const CardStyle = () => {
  return(
    <div className="main-container">
      <div className="row">
        <div className="col">
          <img className="tamañoFoto"
            src={imgFelipe2}
            alt="lfmr"
          />
        </div>
        <div className="col">
          <img className="tamañoFoto"
            src={imgAndres}
            alt="jamr"
          />
        </div>
        <div className="col">
        <img className="tamañoFoto"
          src={imgJacko}
          alt="jack"
          />
        </div>
        <div className="col">
          <img className="tamañoFoto"
            src={imgKitty}
            alt="kitty"
          />
        </div>
      </div>
    </div>  
  )
}

export default CardStyle
