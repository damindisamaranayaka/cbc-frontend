import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrash, FaPencilAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function AdminProductPage() {
    const [products, setProducts] = useState([]);
    const [productLoaded, setProductLoaded] = useState(false);

    // Fetch products from API when component mounts
    useEffect(() => {
        if(!productLoaded){
            axios.get("http://localhost:4000/api/products")
            .then((res) => {
                console.log("Fetched Products:", res.data);
                setProducts(res.data);
                setProductLoaded(true);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }}, [productLoaded]);

    // Function to delete a product
    const handleDelete = (productId) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            const token = localStorage.getItem("token");

            axios.delete(`http://localhost:4000/api/products/${productId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                console.log("Product deleted:", res.data);
                setProducts(products.filter(product => product._id !== productId)); // Update UI after deletion
            })
            .catch((error) => {
                console.error("Error deleting product:", error);
                alert("Failed to delete product. Please try again.");
            });
        }
    };

    return (
        <div className="container mx-auto p-6">
            {/* Add Product Button */}
            <Link 
                to="/admin/products/addProduct" 
                className="absolute right-[25px] bottom-[25px] text-[25px] bg-blue-600 text-white hover:bg-blue-900 rounded-lg p-2"
            >
                <FaPlus />
            </Link>

            <h1 className="text-3xl font-bold mb-6 text-center">Admin Product Page</h1>
            {
                productLoaded?            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">Product ID</th>
                            <th className="py-3 px-6 text-left">Product Name</th>
                            <th className="py-3 px-6 text-left">Last Price</th>
                            <th className="py-3 px-6 text-left">Stock</th>
                            <th className="py-3 px-6 text-left">Description</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id} className="border-b hover:bg-gray-100">
                                <td className="py-3 px-6">{product.productId}</td>
                                <td className="py-3 px-6">{product.productName}</td>
                                <td className="py-3 px-6">${product.lastPrice}</td>
                                <td className="py-3 px-6">{product.stock}</td>
                                <td className="py-3 px-6">{product.description}</td>
                                <td className="py-3 px-6 text-center flex justify-center gap-4">
                                    {/* Delete Button */}
                                    <button 
                                        className="text-red-500 hover:text-red-700" 
                                        title="Delete" 
                                        onClick={() => {                                           
                                           const token=localStorage.getItem("token")
                                            axios.delete(`http://localhost:4000/api/products/${product.productId}`, {
                                                headers: {
                                                    Authorization: `Bearer ${token}`,
                                                },
                                            }).then((res)=>{
                                                console.log("Product deleted:", res.data);
                                                toast.success("Product Deleted Successfully");
                                                setProductLoaded(false);
                                                setProducts(products.filter(product => product._id !== product.productId)); // Update UI after deletion
                                            }).catch((error) => {
                                                console.error("Error deleting product:", error);
                                                alert("Failed to delete product. Please try again.");
                                            });
                                        }}
                                    >
                                        <FaTrash size={18} />
                                    </button>

                                    {/* Edit Button */}
                                    <button className="text-blue-500 hover:text-blue-700">
                                        <FaPencilAlt size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>:
            <div className="w-full h-full flex justify-center">
            <div className="w-[60px] h-[60px] border-[4px] border-gray-200 border-b-[#3b82f6] animate-spin rounded-full"></div>
        </div>
            }
           

        </div>
    );
}
