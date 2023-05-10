import React from "react"
import "../Card/Card.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {imgMama,imgOscar,imgPapa,imgLuidFelipe} from "../ExportImage"

const Card2 =() => {
    return(
        <div className="main-container">
          <div className="row">
            <div className="col">
              <img className="tamañoFoto"
                src={imgMama}
                alt="mama"
              />
            </div>
            <div className="col">
              <img className="tamañoFoto"
                src={imgPapa}
                alt="papa"
              />
            </div>
            <div className="col">
            <img className="tamañoFoto"
              src={imgOscar}
              alt="oscar"
              />
            </div>
            <div className="col">
              <img className="tamañoFoto"
                src={imgLuidFelipe}
                alt="felipe"
              />
            </div>
          </div>
        </div>  
    )
}

export default Card2
