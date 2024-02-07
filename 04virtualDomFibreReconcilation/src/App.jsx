import { useState } from 'react'

import './App.css'

function App() {


  return (
    <>
     <p> whenever page reloads whole dom of the page gets repainted(reloaded) 
      
        <br />
        But in case of virtual dom in js it keeps track of whole dom and changes only the dom which is neceassary
        <br />
        
        but what happens is when changing the required dom maybe the next change occur from network also so problem occurs 
        
        <br />
        <br />
       <strong>fibre</strong>  key ability pause,assign priority, abort, reuse the new dom creation <br />
        <br />
        <strong>reconcilation</strong> react algorithm to diff two tree browser tree(dom) and react tree 
        <br /> 
        react renders creating tree studied in pervious 02 chapter and change only necessary part.
        
        </p>
    </>
  )
}

export default App
