
// import './App.css'

// import { Route, Routes } from "react-router-dom"
// import Product from "./basic-routing/dynamic-routing/Product"
// import ProductDetails from "./basic-routing/dynamic-routing/ProductDetails"
// import Items from "./react-keys/Items"
// import RealWorld from "./react-keys/RealWorld"
// import SimpleForm from "./form/SimpleForm"
// import ComplicatedForm from "./form/ComplicatedForm"
import AxiosGet from "./axios/AxiosGet"
import HookForm from "./form/react-hook-form/HookForm"

import Crud from "./local-storage/Crud" 

import Form from "./local-storage/Form" 
// import Profile from "./hooks/usecontext/Profile"
// import { UserProvider } from "./hooks/usecontext/UserContext"

// function App() {

//   function getGreeting(name){
//     return `Hello ${name}`;
//   }
 
//   function Greeting(){
//     return <h2>{getGreeting("Areej")}</h2>
//   }

//   return (
//    <div>
//     <Greeting/>
//    </div>
//   )
// }

// export default App


// import React from 'react'

// function App() {

//   const isLoggedIn = false;
//   return (
//     <div>
//         <p>{isLoggedIn ? "welcome back" : "please login"}</p>
//     </div>
//   )
// }

// export default App


// import React, { Component } from 'react'
// import Greeting from './functional-component/Greeting'
// import PropDatas from './functional-component/PropDatas'
// import State from './functional-component/state'
// import UnMounting from './class-components/life-sycle-methods/UnMounting'
// import Updating from './class-components/life-sycle-methods/Updating'
// import Mounting from './class-components/life-sycle-methods/mounting'
// import BasicClass from './class-components/BasicClass'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <BasicClass/> */}
//         {/* <Mounting/> */}
//         {/* <Updating/> */}
//         {/* <UnMounting/> */}
//         {/* <State/> */}
//         <PropDatas/>
//         {/* <Greeting/> */}


//       </div>
//     )
//   }
// }

// ----------------react - router - dom ----------------

// import { Route, Routes } from 'react-router-dom'
// import Home from './basic-routing/Home'
// import About from './basic-routing/About'
// import Contact from './basic-routing/Contact'

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/contact-us' element={<Contact/>}/>
//       </Routes>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import { ThemeContext, ThemeProvider } from './hooks/usecontext/ThemeContext'
// import Home from './hooks/usecontext/Home'
// import UserList from './hooks/useeffect/UserList'
// import UseEff from './hooks/useeffect/lifecycle-methods/UseEff'
// import Counter from './hooks/usestate/Counter'

const App = () => {
  return (
    <div>
      {/* <Counter/> */}
      {/* <UseEff/> */}
      {/* <UserList/> */}

      {/* usecontext hook */}
      {/* <ThemeProvider>
        <Home/>
      </ThemeProvider> */}

      {/* <UserProvider>
        <Profile/>
      </UserProvider> */}

    {/* -----------------------dynamic route----------------------------- */}
      {/* <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
      </Routes> */}

      {/*--------------------- react keys ----------------------------------*/}
      {/* <Items/> */}
      {/* <RealWorld/> */}

      {/* --------------------form -------------------*/}
      {/* <SimpleForm/> */}
      {/* <ComplicatedForm/> */}
      {/* ----react-hook-form--- */}
      {/* <HookForm/> */}
      {/* ----local-storage--- */}
      {/* <Form/> */}
      {/* <Crud/> */}

      {/* ----AXIOS----- */}
      <AxiosGet/>

    </div>
  )
}

export default App
