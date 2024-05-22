import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Style from "./index.module.css"
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useGetItemQuery, useDeleteItemMutation } from "../../services/ProductQuerySlice"
const index = () => {
    const { data: products, error, isLoading, refetch, } = useGetItemQuery()
    const [deleteOne, { isError, isSuccess }] = useDeleteItemMutation();
    // console.log(products);
  return (
    <>
    <Container className={Style.productContainer}>

    <Row className={Style.row}>
    {products && products.products.map((product)=>{
        return(
            <Col lg={3}>
             <div className={Style.card}>
              <div className={Style.cardImg}>
                  <img src={product.img} alt="" />
              </div>
              <div className={Style.cardInfo}>
                  <h4>{product.title} </h4>
                  <h5>{product.price}</h5>
                  <button onClick={async () => {
                      if (window.confirm("delete?")) {
                          await deleteOne(product._id)
                          refetch()
                      }
                  }}>Delete</button>
                 
                 <button > <Link to={`/detail/${product._id}`}> Detail</Link></button>
          </div>
          </div>
    
            
            
            </Col>
        )
    })}



    </Row>


    </Container>
    
    
    </>
  )
}

export default index
