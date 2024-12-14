import React, { useState } from 'react'
import "./App.css"
import Navbar from './components/NavBar/Navbar'
import Menu from './components/Menu/Menu'
import Home from './components/HomePage/Home'
import { Routes , Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function App() {
  const [menuOpen , setmenuOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      {/* <Menu ></Menu> */}
      <Navbar menuOpen={menuOpen} setmenuOpen={setmenuOpen}></Navbar> 


      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/menu" element={<Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
