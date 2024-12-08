import { Button, Input } from '@mui/material'
import axios, { HttpStatusCode } from 'axios'
import * as React from 'react'
import '../App.css'

export const FileUploader = ({user, getFiles}) => {
    const [fileToUpload, setFileToUpload] = React.useState({})
    const uploadHandler = async () => {
        if(!fileToUpload) return
        try
        {
            const formData = new FormData();
            formData.append('file', fileToUpload);
           const res = await axios.post(`http://localhost:8080/files/${user}/upload`, formData)
           setFileToUpload({})
            alert(res.status === HttpStatusCode.Ok ? "file uploaded successfully" : "error while uploading content, please try again")
            getFiles()
        }
        catch(e)
        {
            alert("error while uploading content, please try again")
        }
    }

    return <div className='Upload'>
     <Input  onChange={(e) => setFileToUpload(e.target.files[0])} type="file">{"Add a file"}</Input>
     <Button variant={"contained"} onClick={uploadHandler} disabled={!fileToUpload}>{"Upload"}</Button>
    </div>
}