import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetItemByIdQuery } from '../../services/ProductQuerySlice'
import Style from "./index.module.css"
import { Link } from 'react-router-dom';
const index = () => {

  const {id}=useParams()
  const { data: products, error, isLoading, refetch } = useGetItemByIdQuery(id)

  return (
    <div>
      

    <div className={Style.boxss}>
      <div className={Style.boxssImg}>
        <img src={products&&products.data.img}alt="" />
      </div>
      <div className={Style.boxssInfo}>
        <h2>{products&&products.data.title}</h2>
      </div>
      <Link to={"/"}>go back</Link>
    </div>
    </div>
  )
}

export default index
