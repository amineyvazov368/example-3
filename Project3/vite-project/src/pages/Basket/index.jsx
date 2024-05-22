import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketContex'

const index = () => {
  const [basket, setBasket]=useContext(BasketContext)
  return (
    <>
    <div>

      <ul>
      {basket && basket.map((basketItem)=>{
        return(

          <li key={basketItem.id}>
            <span>
              {basketItem.title} | <b>{basketItem.count}</b>
            </span>
            
          </li>
        )
      })}



      </ul>
    </div>
    
    
    </>
  )
}

export default index
