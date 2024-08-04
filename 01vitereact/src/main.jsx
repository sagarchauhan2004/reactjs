import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {jsx as _jsx} from "react/jsx-runtime.js"

function MyApp(){
    return(
        <div>
            <h1>hello iam custom App</h1>
        </div>
    )
}
// const reactElement = {
//     type: "a",
//     props: { href: "https://google.com", target: "_blank" },
//     children: "click me to visit google",
//   };

  const anotherElement = (
    <a href="https://google.com" target='_blank'>
        visit google
    </a>
  )
  const anotherUser = "iam another user"

const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target : '_blank'},
    'click me to visit google ',
    anotherUser

)

ReactDOM.createRoot(document.getElementById('root')).render(

//    <MyApp/>
//    MyApp()
// anotherElement
reactElement
//  <App/> 

)
