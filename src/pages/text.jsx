import {useState} from 'react';


import fileUploadMediaToSupabase from '../utils/mediaUploads';



export default function FileUploadTest(){
    const [file, setFile]= useState(null)

    async function handleUpload(){
        fileUploadMediaToSupabase(file).then((url)=>{
            console.log(url)
        }).catch((err)=>{
            console.log(err)
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