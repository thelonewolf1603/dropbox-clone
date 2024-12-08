import { Button, IconButton, Link } from "@mui/material";
import axios from "axios";

const renderFileEntry = (user, file_name, getFiles) => {

    const fileClickhandler = async () => {
        try
        {
            const res = await axios.post(`http://localhost:8080/files/${user}/download`, {file_name}, {
                responseType: "blob"
            })
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", file_name); 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        catch(e)
        {
            alert("Error while fetching file")
        }
    }

    const fileDeleteHandler = async () => {

        try
        {
            const res = await axios.post(`http://localhost:8080/files/${user}/delete`, {file_name})
            getFiles()
         
        }
        catch(e)
        {
            alert("Error while fetching file")
        }

    }

    return <div className={"FileEntry"}>
            <Button variant="contained" onClick={fileClickhandler}>{file_name}</Button>
            <Button onClick={fileDeleteHandler} color="error" variant="contained" size="small">{"Delete"}</Button>
        </div>

}

export const FileList = ({files, user, getFiles}) => {

    return <div className="FileList">
        <>{"Your uploaded files are listed below..."}</>
    {files.map((file, idx) => {
        return <div key={idx}>{renderFileEntry(user,file.file_name, getFiles)}</div>
    })}
</div>
}