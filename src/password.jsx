import React, { useState , useCallback} from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'


const Password = () => {
const [length, setLength]= useState(8)
const [charAllowed, setcharAllowed]= useState(false)
const [numberAllowed, setNumberAllowed]=useState(false)
const [password, setPassword]= useState("")
const refPassword=useRef(null)
const passwordGenerate =useCallback(()=>{

  let pass=""
  let str="ABCDEFGHIKLMNOPQRSTUVWXYZ"
  let char='!@#$%^&*'
  let num="0123456789"

  if (charAllowed){
    str+=char
  }
  if (numberAllowed){
    str+=num
  }
for(let i=1; i<=length; i++){
  
  let random= str.charAt(Math.floor(Math.random()*str.length + 1))
  pass+=random
}
  
setPassword(pass)

}, [length, charAllowed, numberAllowed, setPassword])

const copypassword =()=>{
  refPassword.current?.select()
  window.navigator.clipboard.writeText(password)

}
useEffect (()=>{
passwordGenerate()
}, [passwordGenerate, length, charAllowed, numberAllowed])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-white text-center my-3'>Password generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={refPassword}
      />
      <button
   onClick={copypassword}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >copy</button>
      
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      min={6}
      max={100}
      value={length}
       className='cursor-pointer'
      onChange={(e)=> {setLength(e.target.value)}}
        />
        <label>Length:{length}</label>
    </div>
    <div className="flex items-center gap-x-1">
    <input
        type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
       onChange={()=> {setNumberAllowed((prev)=> !prev)}}
    />
    <label htmlFor="numberInput">Numbers</label>
    </div>
    <div className="flex items-center gap-x-1">
        <input
            type="checkbox"
           defaultChecked={charAllowed}
            id="characterInput"
           onChange={()=> {setcharAllowed((prev)=> !prev)}}
        />
        <label htmlFor="characterInput">Characters</label>
    </div>
  </div>
</div>
  )
}

export default Password