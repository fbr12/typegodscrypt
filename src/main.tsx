import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ProductContextProvider } from './Context/ProductContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </React.StrictMode>,
)
