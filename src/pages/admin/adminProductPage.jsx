import axios from "axios";
import { useEffect, useState } from "react";

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

    useEffect(() => {
        console.log({
            discountTitle: "Summer Sale",
            firstProduct: products.length > 0 ? products[0] : "No products available"
        });
    }, [products]); // Logs updated products after fetching

    return (
        <div>
            <h1>Admin Product Page</h1>
        <table>
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Last Price</th>
                    <th>Stock</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1234</td>
                    <td>Face Serum</td>
                    <td>39.99</td>
                    <td>100</td>
                    <td>Hydrating serum</td>
                    </tr>

                    <tr>
                    <td>1267</td>
                    <td>Face cream</td>
                    <td>56.99</td>
                    <td>167</td>
                    <td>Hydrating cream</td>
                    </tr>

                    <tr>
                    <td>1784</td>
                    <td>Face wash</td>
                    <td>38.99</td>
                    <td>180</td>
                    <td>Deep Cleansing</td>
                    </tr>
            </tbody>
        </table>
            </div>
        

        
    );
}
//key={product._id}   is React key, which is required to uniquely identify elements in a list and helps React efficiently update the UI.