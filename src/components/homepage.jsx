import axios from "axios"
import * as React from 'react'
import {  Link } from "@mui/material"
import { FileUploader } from "./flieUploader"
import { FileList } from "./fileList"

export const Homepage = ({user})=> {

    const [files, setFiles] = React.useState([])
   

    const getFiles = async () => {
        try
        {
            const res = await axios.get(`http://localhost:8080/files/${user}`)
            setFiles([...res.data])
        }
        catch(e)
        {
            alert("Error while fetching files")
        }
    }

    React.useEffect(()=>{
     getFiles()
    },[])

    

    return <div className={"Homepage"}>
        <h1>{`Welcome ${user} !! to your storage buddy !!!`}</h1>
        <FileUploader user={user} getFiles={getFiles}/>
        {files.length === 0 && <>{"You do not have any uploaded content"}</>}
        <FileList getFiles={getFiles} files={files} user={user} />
    </div>
}