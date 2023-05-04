import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TituloYPuntos from './TituloYPuntos/TituloYPunto.jsx'
import CardStyle from './assets/Card/Card'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TituloYPuntos />
    <CardStyle />
  </React.StrictMode>,
)
