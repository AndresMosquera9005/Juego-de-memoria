import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TituloYPuntos from './TituloYPuntos/TituloYPunto.jsx'
import CardStyle from './assets/Card/Card'
import Card2 from './assets/Card/Card2'
import Card3 from './assets/Card/Card3'
import Card4 from './assets/Card/Card4'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TituloYPuntos />
    <CardStyle />
    <Card2 />
    <Card3 />
    <Card4 />
  </React.StrictMode>,
)
