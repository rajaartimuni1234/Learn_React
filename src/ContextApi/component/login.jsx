import React, { useState,useContext } from 'react'
import UserContext from '../context/UserContext'
const Login = () => {
    const [email, setEmail]=useState('')
    const [password, setPassword]= useState('')

    const {setUser}= useContext(UserContext)
const handleSubmit =(e)=>{
    e.preventDefault()
      setUser({email, password})
}
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder=' email'value={email} onChange={(e)=> setEmail(e.target.value)} />
        <input type="text" placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login