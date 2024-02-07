import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
let myObj = {
  name: "saurabh",
  age: 21
}
let Arr = [1,2,3,4]
  return (
    <>
     <h1 className="text-[90px] bg-green-400 text-black rounded-xl p-[10px] font-bold underline">
      Tailwind Test
    </h1>
    {/* <Card channel = "saurabh" someObje= {myObj} hi = {Arr} />  */}
    {/* giving values as object to card known props */}
    <Card userName = "saurabh" btnText = "click Me" />
    <Card userName = "sulav" btnText = "visit Me"/>
    <Card userName = "madhav" />
  

    </>
  )
}

export default App
