import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Card/Card.css";
import VerImagen from "./VerImagen";
import { imgFelipe2, imgAndres, imgJacko, imgKitty , noImage } from "../ExportImage";

const Card3 = () => {

  const [Imagen1,CambiarImagen1] = useState(noImage)
  const [Imagen2,CambiarImagen2] = useState(noImage)
  const [Imagen3,CambiarImagen3] = useState(noImage)
  const [Imagen4,CambiarImagen4] = useState(noImage)

  return (
    <div className="main-container">
      <div className="row">
        <div className="col">
          <img className="tamañoFoto" src={Imagen1} alt="lfmr" onClick={() => VerImagen(CambiarImagen1,imgFelipe2)} />        
        </div>
        <div className="col">
          <img className="tamañoFoto" src={Imagen2} alt="jamr" onClick={() => VerImagen(CambiarImagen2,imgAndres)} />
        </div>
        <div className="col">
          <img className="tamañoFoto" src={Imagen3} alt="jacko"  onClick={() => VerImagen(CambiarImagen3,imgJacko)}/>
        </div>
        <div className="col">
          <img className="tamañoFoto" src={Imagen4} alt="kitty"  onClick={() => VerImagen(CambiarImagen4,imgKitty)}/>
        </div>
      </div>
    </div>
  );
};

export default Card3;
