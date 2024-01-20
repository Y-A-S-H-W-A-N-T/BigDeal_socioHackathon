import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from '../src/pages/home.jsx'
import './index.css'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/home" element={<Home />}/>
        </Routes>
      </BrowserRouter>
   
    
  </React.StrictMode>,
)
