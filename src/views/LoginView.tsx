import React, { ReactElement, useState } from 'react'

export default function LoginView(): ReactElement {
    const mockData = [
        {username: "Bob", password: "qwerty"},
        {username: "Bob", password: "secret"},
        {username: "Jag", password: "12345"}
]
    const [userName, setUserName ] = useState("")
    const [password, setPassword] = useState("")
    const [res, setRes] = useState("")

    function verifyLogin() {
        const correctUsername = mockData.filter(data => data.username === userName)
        const correctPassword = correctUsername.filter(data => data.password === password)
        if (correctPassword[0]){
            setRes(`Welcome ${correctPassword[0].username}`)
        } else {
            setRes("Invalid username or password")
        }
    }

    function submit(event: any){
        verifyLogin() 
    }
    return (
        <div>
            <form action="">
                <label>Username</label>
            <input type="text"onChange={event => setUserName(event.target.value)}/>
                <label>Password </label>
                <input type="password" onChange={event => setPassword(event.target.value)} />
                <button onClick={submit}>Login</button>
            </form>
            <p id="response">{res}</p>
        </div>
    )
}
