import React from 'react'
import UserContextProvider from './context/ProveriderContext'
import Login from './component/login'
import Profile from './component/Profile'
const App = () => {
  return (
    <UserContextProvider>
<h1> learn React</h1>
<Login/>
<Profile />
    </UserContextProvider>
    
  )
}

export default App