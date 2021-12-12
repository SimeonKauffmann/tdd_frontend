import React, { ReactElement, useState, useEffect } from "react"
import axios from "axios";

import UserContext from "../components/UserContext"

export default function LoginView(): ReactElement {

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [usersData, setUsersData] = useState<any>([])
  const [res, setRes] = useState("")

 async function getData () {
      await axios
      .get("http://localhost:3001/users")
      .then((response) => setUsersData(response.data));
}


  function verifyLogin() {
    const correctUsername = usersData.filter((data: any) => data.name === userName)
    const correctPassword = correctUsername.filter(
      (data: any) => data.userLogin === password
    )
    if (correctPassword[0]) {
      setRes(`Welcome ${correctPassword[0].name}`)
    } else {
      setRes("Invalid username or password")
    }
  }

  function submit(event: any) {
    event.preventDefault()
    getData();
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
