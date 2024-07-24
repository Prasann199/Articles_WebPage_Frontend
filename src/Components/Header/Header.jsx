import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate=useNavigate();

  const add=()=>{
    navigate('/add')
  }

  const view=()=>{
    navigate('/getData')
  }


  return (
    <div className='header'>
        <div className="nav">
            <h2>Articles Spot</h2>
            <div className='nav-right'>
            <button onClick={add}>Add Articles</button>
            <button onClick={view}>View Articles</button>
            </div>
        </div>
    </div>
  )
}

export default Header