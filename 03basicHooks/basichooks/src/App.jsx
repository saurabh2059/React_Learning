
import {useState } from 'react'

import './App.css'

function App() {

  // useState gives array one value and another function ; 
  // it is called hook
  // it changes the value in whole ui where the variable is used
  // removes the complexity of getting element using addtext
  

  let [counter, setCounter] = useState(0)

// let counter = 5

const addValue = ()=>{
  // console.log("value added", Math.random())
  counter = counter+1
  setCounter(counter)
  // console.log(counter)
}

const subValue = () =>{
  // counter -- ;
  setCounter(counter-1);
}


  return (
    <>
     <h1>HI SAURABH</h1>
    <h2>COUNTER Value : {counter}</h2>
    <button onClick={addValue}>Add Value {counter}</button> <br />
    <br />
    <button onClick={subValue}>Sub Value {counter}</button>
    </>
  )
}

export default App
