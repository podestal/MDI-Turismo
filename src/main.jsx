import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <APIProvider apiKey='AIzaSyAk-bP1cgyzJrnfT8v3MDYMRJ_0X8bFjgM'>
      <App />
    </APIProvider>
  </React.StrictMode>,
)
