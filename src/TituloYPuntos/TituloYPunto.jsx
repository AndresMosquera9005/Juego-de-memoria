import React from "react"
import "../TituloYPuntos/TituloYPuntos.css"

function Header(){
    return(
        <>
            <div id="cabecera">
                <h2 id="Memoriman">Memoriman</h2>
                <div id="divpuntos">
                    <p id="lblpuntos">Puntos</p>
                    <span>0</span>
                </div>

            </div>
        </>
    )
}
 
export default Header