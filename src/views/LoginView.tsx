import React, { ReactElement, useState } from "react"

import UserContext from "../components/UserContext"

export default function LoginView(): ReactElement {
  const usersData = [
    { userLogin: "Patrik261", name: "Patrik" },
    { userLogin: "password", name: "Samuel" },
    { userLogin: "tyst", name: "Simeon" },
    { userLogin: "secret", name: "Lulin" },
  ]

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [res, setRes] = useState("")

  function verifyLogin() {
    const correctUsername = usersData.filter((data) => data.name === userName)
    const correctPassword = correctUsername.filter(
      (data) => data.userLogin === password
    )
    if (correctPassword[0]) {
      setRes(`Welcome ${correctPassword[0].name}`)
    } else {
      setRes("Invalid username or password")
    }
  }

  function submit(event: any) {
    event.preventDefault()
    verifyLogin()
  }
  return (
    <UserContext.Provider value={password}>
      <form action="">
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={(event) => setUserName(event.target.value)}
        />
        <label>Password </label>
        <input
          type="password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={submit}>Login</button>
      </form>
      <p id="response">{res}</p>
    </UserContext.Provider>
  )
}
