/*export default function AddProductForm() {
    return (
        <div className="w-full h-full bg-red-400 flex  items-center justify-center space-y-3 ">
            <h1 className="text-black text-3xl font-bold">Add Product Page</h1>
            <div className= "flex flex-col">
                <input type="text" placeholder="Product Name" className="border border-black" />
                <input type="text" placeholder="Product Price" className="border border-black" />
                <input type="text" placeholder="Product Description" className="border border-black" />
                <input type="text" placeholder="Product Image" className="border border-black" />
                <button className="bg-black text-white">Submit</button>
            </div>
        </div>
    );
}  */
    import { use, useState } from "react";
    import axios from 'axios';
    import { toast } from 'react-hot-toast';
    import { useNavigate } from 'react-router-dom';
    export default function AddProductForm() {
        const [productId, setProductID] = useState("");
        const [productName, setProductName] = useState("");
        const [alternativeName, setAlternativeName] = useState("");
        const [imageURL, setImageURL] = useState("");
        const [price, setPrice] = useState("");
        const [stock, setStock] = useState("");
        const [description, setDescription] = useState("");
        const navigate= useNavigate();
        async function handleSubmit() {
            console.log("Submit button clicked"); // Debugging step ✅
            
            const altnames = alternativeName.split(",");
            const imgurl = imageURL.split(",");
            const product = {
                productId,
                productName,
                altNames: altnames,
                images: imgurl,
                price,
                stock,
                description
            };
            
            console.log("Product data:", product); // Debugging step ✅
        
            const token = localStorage.getItem("token");
            console.log("Token:", token); // Debugging step ✅
            
            try {
                const response = await axios.post("http://localhost:4000/api/products", product, {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                });
        
                console.log("Product added response:", response.data); // Debugging step ✅
                navigate("/admin/products");
                toast.success("Product Added Successfully");
            } catch (err) {
                toast.error("Failed to add products");
            }
        }
                
        return (
            <div className="flex min-h-screen w-full bg-blue-200">
                {/* Main Content */}
                <div className="flex-1 p-6">
                    <h1 className="text-3xl font-bold text-black mb-6">Add Product</h1>
    
                    <div className="max-w-lg space-y-4">
                        {/* Product ID */}
                        <label className="block text-lg font-semibold">Product ID</label>
                        <input 
                            type="text" 
                            className="w-full border border-black p-2 rounded" 
                            placeholder="Enter Product ID"
                            value={productId}
                            onChange={(e) => setProductID(e.target.value)} 
                        />
    
                        {/* Product Name */}
                        <label className="block text-lg font-semibold">Product Name</label>
                        <input 
                            type="text" 
                            className="w-full border border-black p-2 rounded" 
                            placeholder="Enter Product Name"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)} 
                        />
    
                        {/* Alternative Name */}
                        <label className="block text-lg font-semibold">Alternative Name</label>
                        <input 
                            type="text" 
                            className="w-full border border-black p-2 rounded" 
                            placeholder="Enter Alternative Name" 
                            value={alternativeName}
                            onChange={(e) => setAlternativeName(e.target.value)} 
                        />
    
                        {/* Image URL */}
                        <label className="block text-lg font-semibold">Image URL</label>
                        <input 
                            type="text" 
                            className="w-full border border-black p-2 rounded" 
                            placeholder="Enter Image URL" 
                            value={imageURL}
                            onChange={(e) => setImageURL(e.target.value)} 
                        />
    
                        {/* Price */}
                        <label className="block text-lg font-semibold">Price</label>
                        <input 
                            type="number" 
                            className="w-full border border-black p-2 rounded" 
                            placeholder="Enter Price" 
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} 
                        />
    
                        {/* Stock */}
                        <label className="block text-lg font-semibold">Stock</label>
                        <input 
                            type="number" 
                            className="w-full border border-black p-2 rounded" 
                            placeholder="Enter Stock" 
                            value={stock}
                            onChange={(e) => setStock(e.target.value)} 
                        />
    
                        {/* Description */}
                        <label className="block text-lg font-semibold">Description</label>
                        <textarea 
                            className="w-full border border-black p-2 rounded" 
                            placeholder="Enter Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
    
                        {/* Submit Button */}
                        <button className="w-full bg-black text-white p-2 rounded hover:bg-gray-800" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    