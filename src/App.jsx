import { useState } from 'react'
import './index.css';
import './App.css'
import LoginPage from './pages/loginPage.jsx'
import HomePage from './pages/homePage.jsx'
import SignupPage from './pages/signInPage.jsx'
import AdminHomePage from './pages/adminHomePage.jsx'
import UserData from './pages/UserData.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
  <BrowserRouter>
  <Routes path="/*">
  <Route path= "/login" element= {<LoginPage/>}/>
  <Route path= "/" element= {<HomePage/>}/>  
  <Route path="/user" element= {<UserData/>}/>
  <Route path= "/signup" element= {<SignupPage/>}/>
  <Route path="/admin/*" element= {<AdminHomePage/>}/>
  <Route path= "/*" element={<HomePage/>}/>    
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
