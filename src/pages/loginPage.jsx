
import {Link} from 'react-router-dom';
export default function LoginPage(){
return(
    <div>
    <h1>Login Page</h1>
    <input type="text" 
    placeholder="Enter your username" />
    <input type="password"
    placeholder="Enter your password"/>
    <button className= 'bg-yellow-500 p-11 p-'>Login</button>
    <button className= 'bg-red-400 m-5'>Login2</button>
    <Link to="/">Home</Link>
    </div>
)
    
}