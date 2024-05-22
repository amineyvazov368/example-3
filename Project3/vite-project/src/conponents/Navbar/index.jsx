import React from 'react'
import Style from "./index.module.css"
import Button from "@mui/material/Button"
import {Link} from "react-router-dom"

import { BasketContext } from '../../context/BasketContex'
const index = () => {

  return (
   <>
   <div className={Style.nav}>
    <div className={Style.container}>
      <div className={Style.logo}>
        <h2>COLOSHOP</h2>
      </div>
      <div className={Style.button}>
      <Button>
        <Link to={"/"} className={Style.link} >Home</Link>
      </Button>
      <Button>
        <Link to={"/add"} className={Style.link} >Add</Link>
      </Button>
      <Button>
        <Link to={"/basket"} className={Style.link} >Basket <sup></sup></Link>
      </Button>
      <Button>
        <Link to={"/detail"} className={Style.link} >Detail</Link>
      </Button>

      </div>
    </div>

   </div>


   </>
  )
}

export default index
