import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/style.css'

import { CandidatoApp } from './CandidatoApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1 id="tituloBocaUrna">Boca de urnas</h1>
    <CandidatoApp titulo="Candidato 1" />
    <br></br>
    <CandidatoApp titulo="Candidato 2" />
  </React.StrictMode>,
)
