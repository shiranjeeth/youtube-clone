import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const IsMenuOpen = useSelector(store=>store.app.isMenuOpen)
  if(!IsMenuOpen) return null
  return (

    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
        </ul>
      <h1 className='font-bold pt-5'>Subsriptions</h1>
      <ul>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
      </ul>
    </div>
  
  )
}

export default SideBar