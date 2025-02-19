
import {Link} from 'react-router-dom';
export default function HomePage() {
    return (
        <div className="home-container">
            <h1>Welcome to the Home Page</h1>
            <p>This is a simple home page for your website.</p>
            <button onClick={()=> alert ('Button Clicked!')}>Get Started</button>

            <Link to="/login">Login</Link>
        </div>
    );
}
