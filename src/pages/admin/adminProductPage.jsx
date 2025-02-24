import axios from "axios"
export default function AdminProductPage(){

    axios.get("http://localhost:4000/api/products").then((res)=>{
        console.log(res)
    })
    return(
        <div>Admin Product Page</div>
    )
}