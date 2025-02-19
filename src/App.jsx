import { useState } from 'react'
import './index.css';
import './App.css'
import LoginPage from './pages/loginPage.jsx'
import HomePage from './pages/homePage.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
  <Routes path="/*">
  <Route path= "/login" element= {<LoginPage/>}/>
  <Route path= "/" element= {<HomePage/>}/>  
  <Route path= "/*" element={<h1>404 error</h1>}/>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
