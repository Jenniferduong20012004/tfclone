import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css' // if you have global styles
console.log("✅ main.jsx loaded");

const rootElement = document.getElementById("root");
console.log("🧪 rootElement:", rootElement);

if (!rootElement) {
  throw new Error("❌ No root element found!");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)