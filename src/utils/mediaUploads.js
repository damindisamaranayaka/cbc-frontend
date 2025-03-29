const key= `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0ZWphcmRvdXV0c3NiY2d2eW9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4NzE0NzMsImV4cCI6MjA1ODQ0NzQ3M30.EpuWMWV7LQq91vyFlDRZYeMYe5lUYkF2OyrPttAgtew`
const url= "https://ftejardouutssbcgvyoe.supabase.co"
import { createClient } from "@supabase/supabase-js";
export default function fileUploadMediaToSupabase(file){
   return new Promise((resolve, reject) => {
    if(file==null){
        reject("File not added")     
    }
    
    let fileName = file.name
    const extension = fileName.split(".")[fileName.split(".").length-1]  //used to extract the file extension from a given filename. 

    const supabase= createClient(url , key) //meken psse supabase ekay frontend eky athara connection eky hdenawa me url eky key ekay pass karata passe
    const timestamp= new Date().getTime() //getTime() method returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
    fileName= timestamp+"."+extension //file name eka timestamp ekk athulata gnnwa  //timestamp eken file name eka hadanaw

    supabase.storage.from("images").upload(fileName, file,{  //file name eken file ek upload wenn kyl denawa  //images kynne bucket name ek
        cacheControl: "3600",
        upsert: false
     }).then(()=>{
        const publicUrl=supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
        resolve(publicUrl);
     }).catch((err)=>{
        reject(err);
     })
})
}





