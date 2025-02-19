import { useState } from 'react'
import './index.css';
import './App.css'
import LoginPage from './pages/loginPage.jsx'
import HomePage from './pages/homePage.jsx'
import SignupPage from './pages/signInPage.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-red-300 h-[100vh]'>
  <BrowserRouter>
  <Routes path="/*">
  <Route path= "/login" element= {<LoginPage/>}/>
  <Route path= "/" element= {<HomePage/>}/>  
  <Route path= "/signup" element= {<SignupPage/>}/>
  <Route path= "/*" element={<HomePage/>}/>    
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
