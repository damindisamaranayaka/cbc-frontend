import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrash, FaPencilAlt } from "react-icons/fa";

export default function AdminProductPage() {
    const [products, setProducts] = useState([
        {
            "_id": "67a20fccde23b48d73532df2",
            "productId": "B2001",
            "productName": "Hydrating Face Serum",
            "altName": ["Moisturizing Serum", "Glow Boost Serum"],
            "image": "https://example.com/images/face-serum.jpg",
            "price": 29.99,
            "lastPrice": 39.99,
            "stock": 100,
            "description": "A lightweight, fast-absorbing face serum enriched with hyaluronic acid and vitamin C for deep hydration and a radiant glow.",
            "__v": 0
        },
        {
            "_id": "67a21047de23b48d73532df8",
            "productId": "B2002",
            "productName": "Face Serum",
            "altName": ["Moisturizing Serum", "Glow Boost Serum"],
            "image": "https://example.com/images/face-serum.jpg",
            "price": 29.99,
            "lastPrice": 39.99,
            "stock": 100,
            "description": "A lightweight, fast-absorbing face serum enriched with hyaluronic acid and vitamin C for deep hydration and a radiant glow.",
            "__v": 0
        }
    ]);

    useEffect(() => {
        axios.get("http://localhost:4000/api/products")
            .then((res) => {
                console.log("Fetched Products:", res.data);
                setProducts(res.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Admin Product Page</h1>
            <div className="overflow-x-auto">
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
                                    <button className="text-red-500 hover:text-red-700">
                                        <FaTrash size={18} />
                                    </button>
                                    <button className="text-blue-500 hover:text-blue-700">
                                        <FaPencilAlt size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}