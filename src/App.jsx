import { useState } from 'react'
import './index.css';
import './App.css'
import LoginPage from './pages/loginPage.jsx'
import HomePage from './pages/homePage.jsx'
import SignupPage from './pages/signInPage.jsx'
import AdminHomePage from './pages/adminHomePage.jsx'
import UserData from './pages/UserData.jsx'
import FileUploadTest from './pages/text.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
  <BrowserRouter>
  <Toaster position='top-right'/>
  <Routes path="/*">
  <Route path= "/login" element= {<LoginPage/>}/>
  <Route path= "/" element= {<HomePage/>}/>  
  <Route path="/user" element= {<UserData/>}/>
  <Route path= "/signup" element= {<SignupPage/>}/>
  <Route path="/admin/*" element= {<AdminHomePage/>}/>
  <Route path="/testing" element={<FileUploadTest/>}/>
  <Route path= "/*" element={<HomePage/>}/>    
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
