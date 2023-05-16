import { noImage } from "../ExportImage";

var imagen1 = "" ;
var imagen2 = "" ;
var funcion1 ;
var funcion2 ;

const VerImagen = (funcion,img) => { 
  if(imagen1 == ""){
    imagen1 = img
    funcion1 = funcion
    funcion1(img)
  }else{
    imagen2 = img
    funcion2 = funcion
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
    funcion1(noImage)
    funcion2(noImage)

   }, 2000);
  }
  imagen1 = "";
  imagen2 = ""; 
} 

export default VerImagen
