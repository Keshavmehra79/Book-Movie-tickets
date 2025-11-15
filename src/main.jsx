import {BrowserRouter} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './root.jsx'  
import Signup from './navbar.jsx'
import "./styling/signuplogin.css"
import "./styling/navbar.css"
import "./styling/moviescards.css"
import "./styling/footer.css"
import "./styling/buytickets.css"
import "./styling/contact.css"
import "./styling/viewdata.css"




createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
 

)
