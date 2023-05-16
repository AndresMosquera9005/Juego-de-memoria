import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Card/Card.css";
import VerImagen from "./VerImagen";
import { imgMama, imgOscar, imgPapa, imgLuidFelipe, noImage } from "../ExportImage";

const Card4 = () => {
  const [Imagen1,CambiarImagen1] = useState(noImage)
  const [Imagen2,CambiarImagen2] = useState(noImage)
  const [Imagen3,CambiarImagen3] = useState(noImage)
  const [Imagen4,CambiarImagen4] = useState(noImage)

  return (
    <div className="main-container">
      <div className="row">
        <div className="col">
          <img className="tamañoFoto" src={Imagen1} alt="mama" onClick={() => VerImagen(CambiarImagen1,imgMama)} />
        </div>
        <div className="col">
          <img className="tamañoFoto" src={Imagen2} alt="papa" onClick={() => VerImagen(CambiarImagen2,imgPapa)}  />
        </div>
        <div className="col">
          <img className="tamañoFoto" src={Imagen3} alt="oscar" onClick={() => VerImagen(CambiarImagen3,imgOscar)}  />
        </div>
        <div className="col">
          <img className="tamañoFoto" src={Imagen4} alt="felipe" onClick={() => VerImagen(CambiarImagen4,imgLuidFelipe)}  />
        </div>
      </div>
    </div>
  );
};

export default Card4;
