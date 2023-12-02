import React from 'react'
import ReactDOM from 'react-dom/client'
import routes from "./routes/index.jsx";
import {RouterProvider} from "react-router-dom";
import App from "./App.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
      <App />
  </>,
)