import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/style.css'

import { CandidatoApp } from './CandidatoApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div><h1>Boca de urnas</h1></div>
    <div>
      <CandidatoApp titulo="Candidato 1" />
    </div>
    <div>
      <CandidatoApp titulo="Candidato 2" />
    </div>
  </React.StrictMode>,
)
