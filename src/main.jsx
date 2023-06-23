import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ListeDepenseContextProvider from './utils/context/ListeDepenseContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListeDepenseContextProvider>
      <App />
    </ListeDepenseContextProvider>
    
  </React.StrictMode>,
)
