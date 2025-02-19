import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h1>
        
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-1">Username</label>
          <input 
            type="text" 
            placeholder="Enter your username" 
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" 
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-1">Password</label>
          <input 
            type="password" 
            placeholder="Enter your password" 
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" 
          />
        </div>
        
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">Login</button>
        
        <div className="flex justify-between items-center mt-4">
          <button className="text-sm text-gray-600 hover:underline">Forgot Password?</button>
          <Link to="/" className="text-sm text-blue-500 hover:underline">Go to Home</Link>
        </div>
      </div>
    </div>
  );
}
