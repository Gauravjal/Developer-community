import React from 'react'
import { NavLink } from 'react-router-dom'  
function LeftSidebar() {
  return (
    <nav className="left-side-bar">
      <NavLink className="item" to="/"><p>PUBLIC</p></NavLink>
      <br/>
      <NavLink className="item" to="/"><p>QUESTIONS</p></NavLink>
      <br/>
      <NavLink className="item" to="/"><p>HOME</p></NavLink>
      <br/>
      <NavLink className="item" to="/"><p>TAGS</p></NavLink>
      <br/>
      <NavLink className="item" to="/"><p>USERS</p></NavLink>
      </nav>
  )
}

export default LeftSidebar