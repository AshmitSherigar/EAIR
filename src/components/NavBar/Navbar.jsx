import React from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'

function Navbar(props) {
  // console.log(props);
  const navigate = useNavigate()

  const menuBarOpens = ()=>{
    props.setmenuOpen(true)
    navigate("/menu")
    // console.log(props.menuOpen);
  }
  return (
    <div className='navigation'>
      <h1>EAIЯ</h1>
      <h4 onClick={menuBarOpens}>Menu</h4>
    </div>
  )
}

export default Navbar
