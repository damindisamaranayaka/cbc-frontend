import {useState} from 'react';
import { createClient } from "@supabase/supabase-js";

const key= `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0ZWphcmRvdXV0c3NiY2d2eW9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4NzE0NzMsImV4cCI6MjA1ODQ0NzQ3M30.EpuWMWV7LQq91vyFlDRZYeMYe5lUYkF2OyrPttAgtew`
const url= "https://ftejardouutssbcgvyoe.supabase.co"
export default function FileUploadTest(){
    const [file, setFile]= useState(null)

    function handleUpload(){
        if(file==null){
            alert("Please select a file")
            return
        }
        console.log(file)

        const fileName = file.name
        const extension = fileName.split(".")[fileName.split(".").length-1]  //used to extract the file extension from a given filename. 
        if(extension!="jpg" && extension!="jpeg" && extension!="png"){
            alert("Please select a valid image file")
            return
        }



        const supabase= createClient(url , key) //meken psse supabase ekay frontend eky athara connection eky hdenawa me url eky key ekay pass karata passe
        supabase.storage.from("images").upload(file.name, file,{  //file name eken file ek upload wenn kyl denawa
            cacheControl: "3600",
            upsert: false
        }).then((res)=>{
            console.log(res)
            alert("File uploaded successfully")
        })
    }
    return(
        <div>
            <h1>File Upload Test</h1>
            <input type="file" onChange={(e)=>{
                setFile(e.target.files[0])
            }}/>
            <button onClick={handleUpload}>Upload</button>  
        </div>
    )
}