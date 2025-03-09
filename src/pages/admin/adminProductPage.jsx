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
            {
                products.map(
                    (product,index)=>{
                        return(
                            <div key={product._id}>
                                {index}
                                {product.productName}
                                </div>
                        )
                    }
                )
            }
            </div>
        

        
    );
}
