import { noImage } from "../ExportImage";

var imagen1 = "" ;
var imagen2 ="" ;

const VerImagen = (funcion,img) => {
  if(imagen1 == ""){
    imagen1 = img
    funcion(img)
    
  }else{
    imagen2 = img
    compararImagenes(funcion);
  }
}

  const compararImagenes =(funcion) =>{
    if(imagen1 === imagen2){
      mostrarImagenes(funcion,true)
    }else{
      mostrarImagenes(funcion,false)
    }
  }

  const mostrarImagenes = (funcion,sonIguales) => {
    funcion(imagen2)
    if(sonIguales == false){
      setTimeout(function() {
        funcion(noImage)
      }, 2000);
    }
    
  } 

export default VerImagen