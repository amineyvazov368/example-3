import React from 'react'
import Style from "./index.module.css"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { usePostItemMutation } from '../../services/ProductQuerySlice';
import { useState } from 'react';
const index = () => {
  
  const [postItem]=usePostItemMutation()

    const formik = useFormik({
      initialValues: {
        title: '',
        price: '',
        img: '',
      },
      validationSchema: Yup.object({
        title: Yup.string()
          .max(15, 'Must be 15 characters or less'),
          
          price: Yup.number()
          .max(2000, 'Must be 20 characters or less'),
          img: Yup.string().url('Invalid email url')
      }),
      onSubmit:async(values)=>{
        console.log(" newItem",values);
        await postItem(values);
        refetch();
        formik.resetForm()
      }
    })
    
  return (
    <>
        <div>
          <h1>Add Item</h1>
           <form className={Style.form} onSubmit={formik.handleSubmit}>
       <label htmlFor="title">Title</label>
        <br />
       <input
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.title}
       />
       {formik.touched.title && formik.errors.title ? (
         <div>{formik.errors.title}</div>
       ) : null}
 <br />
       <label htmlFor="price">Price </label> 
       <br />
       <input
         id="price"
         name="price"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.price}
       />
       {formik.touched.price && formik.errors.price ? (
         <div>{formik.errors.price}</div>
       ) : null}
 <br />
       <label htmlFor="img">IMG</label>
        <br />
       <input
         id="img"
         name="img"
         type="url"
         onChange={formik.handleChange}
         value={formik.values.img}
       />
       {formik.touched.img && formik.errors.img ? (
         <div>{formik.errors.img}</div>
       ) : null}
 <br />
       <button type="submit">Submit</button>
     </form></div>
    
    
    </>
  )
       }

export default index
