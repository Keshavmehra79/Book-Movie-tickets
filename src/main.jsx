import {BrowserRouter} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './root.jsx'  
import Signup from './navbar.jsx'
import "./styling/signuplogin.css"
import "./styling/navbar.css"
import "./styling/moviescards.css"
import "./styling/footer.css"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
)
