import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Products from "../../conponents/Products"
import Col from 'react-bootstrap/Col';
import Style from "./index.module.css"
const index = () => {
  return (
   <>
   <section className={Style.title} style={{backgroundImage: `url('https://preview.colorlib.com/theme/coloshop/images/slider_1.jpg')`}}>
   <Container>
      <Row>
        <Col className={Style.first} lg={8}>
          <p>SPRING / SUMMER COLLECTION 2017</p>
          <h1>Get up to 30% Off New Arrivals</h1>
          <button><b>SHOP NOW</b></button>
        </Col>
      
      </Row>
    </Container>
  
    </section>
    <section className={Style.kind}>
      <Container>

      <Row className={Style.roww}>

        <Col lg={4} sm={12} md={12}>
        <div className={Style.card1}>
          <div className={Style.cardText}><h3>WOMEN'S</h3></div>
        </div>
        
        </Col>
        <Col lg={4} sm={12}  md={12}>
        <div className={Style.card2}>
          <div className={Style.cardText}><h3>WOMEN'S</h3></div>
        </div>
        
        </Col>
        <Col lg={4} sm={12}  md={12}>
        <div className={Style.card3}>
          <div className={Style.cardText}><h3>WOMEN'S</h3></div>
        </div>
        
        </Col>
      </Row>

      </Container>
    </section>
     <section className={Style.products}>
      <div className={Style.productTitle}>
        <h1>New Arrivals</h1>
        <div></div> <br />
        <div className={Style.boxs}> 
          <button>All</button>
          <button>WOMEN'S</button>
          <button>ACCESSORIES</button>
          <button>MEN'S</button>
        </div>
      </div>
      <Products/>
     </section>
   
   </>
  )
}

export default index
