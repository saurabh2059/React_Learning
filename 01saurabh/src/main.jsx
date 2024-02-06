import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <>
    <h1>custom APP</h1>
    </>
  )
}
// const ReactElement  = {
//   type: "a",
//   props : {
//       href: "https://google.com",
//       target: "_blank",
//   },
//   children: "click me to visit google"
// }
const anotherUser = "saurabh"
const anotherElement = (
  <a href="https://google.com" target='_blank'> VISIT GOOGLE</a>
)
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
   "goooooogle",
   anotherUser
 )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
   { reactElement }
   {anotherElement}
    <MyApp/>
  
  </React.StrictMode>,
)
