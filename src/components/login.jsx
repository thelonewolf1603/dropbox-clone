import { Button, TextField } from "@mui/material"
import axios, { HttpStatusCode } from "axios"
import * as React from 'react'


export const Login = ({setCurrentUser}) => {

    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const loginHandler = async () =>{
        try{
            const res = await axios.post(`http://localhost:8080/files/login`, {
               username,
                password
            })

            if(res.status === HttpStatusCode.Ok)
            {
                setCurrentUser(username)
            }
        }
        catch(e)
        {
            alert(e.response.data)
        }
    }

    const isLoginDisabled = () => {
        return username.length === 0 || password.length === 0 || username.length > 50 || password.length > 50
    }

    return <div className={"Login"}>
        <h1>{"Login to Storage Buddy :}"}</h1>
        <p>{"If you are an existing user, please use your saved creds..."}</p>
    <TextField onChange={(e) => {setUsername(e.target.value)}} value={username} type="text" placeholder="username" label="Username" />
    <TextField onChange={(e) => {setPassword(e.target.value)}} value={password} type="password" placeholder="username" label="Password" />
    <Button variant="contained" className={"LoginBtn"} disabled={isLoginDisabled()} type="submit" onClick={loginHandler}>Login</Button>
    </div>
}