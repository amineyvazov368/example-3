import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from "../conponents/Navbar"
const PageRoot = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    
    
    </>
  )
}

export default PageRoot
