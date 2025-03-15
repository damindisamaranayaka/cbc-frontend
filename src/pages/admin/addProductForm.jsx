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

    export default function AddProductForm() {
        return (
            <div className="w-full h-full bg-red-400 flex flex-col items-center justify-center p-6">
                {/* Title */}
                <h1 className="text-black text-3xl font-bold mb-4">Add Product Page</h1>
    
                {/* Form Fields */}
                <div className="flex flex-col space-y-3 w-full max-w-md">
                    <input type="text" placeholder="Product Name" className="border border-black p-2 rounded" />
                    <input type="text" placeholder="Product Price" className="border border-black p-2 rounded" />
                    <input type="text" placeholder="Product Description" className="border border-black p-2 rounded" />
                    <input type="text" placeholder="Product Image" className="border border-black p-2 rounded" />
    
                    {/* Submit Button */}
                    <button className="bg-black text-white p-2 rounded hover:bg-gray-800">Submit</button>
                </div>
            </div>
        );
    }
    
