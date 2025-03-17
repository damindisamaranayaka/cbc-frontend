import { Link } from 'react-router-dom';
import {useState} from "react"
import axios from 'axios';
import { toast } from 'react-hot-toast';
export default function LoginPage() {
  const [email,setEmail]= useState("Your Email")
  const [password, setPassword]= useState("")

  function login(){
    axios.post("http://localhost:4000/api/users/login", {
      email:email,
      password:password
    }).then(
      (res)=>{
        console.log(res)
        if(res.data.user==null){    //user knk log wela nathnm function eka methanin nawaththala return karann ona
          toast.error(res.data.message)  //mee roast ek dammama msg ek udin lassanat pennawa
          return
        }
        
        localStorage.setItem("token", res.data.token)   //local storage eke userge token ek save krgnnwa
        if(res.data.user.type== "admin"){
          window.location.href="/admin"    //type ek admin nm admin dashboard ekt ynn
      }  else{
        window.location.href="/" 
      }
    }
    )
  }
  return (
   <div className= "flex justify-center items-center w-full h-screen bg-red-800">
    <div className="flex flex-col justify-center items-center w-[450px] h-[450px] bg-blue-600" >
    <img src='/logo.png' className="rounded-full w-[100px]"/>
    <span>Email</span>
    <input defaultValue={email} onChange={(e)=>{
        setEmail(e.target.value)
    }}/>
    <span>Password</span>
    <input type='password' defaultValue={password} onChange={(e)=>{
      setPassword(e.target.value)
    }}/>
    <button onClick={login}
    className="bg-white">Login</button>
    </div>
   </div>
  );
}
//newadmin@example.com