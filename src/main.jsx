import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CalenderContextProvider from './context/CalenderContext.jsx';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
    <CalenderContextProvider>
      <App />
    </CalenderContextProvider>
,
)
