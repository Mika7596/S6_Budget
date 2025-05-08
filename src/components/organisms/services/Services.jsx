import React, { useState } from 'react'
import {data} from '../../../assets/data/data'
import Card from '../../atoms/card/Card'
import UserInfo from '../../atoms/userinfo/UserInfo';

function Services() {

    const [webSelected, setWebSelected] = useState(false)

    const cards = data.map((item, i) =>{
        return <Card key={i} data={item} handleClick={handleClick} webSelected={webSelected}></Card>
      })
    
    let [total, setTotal] = useState(0)
    let sum = 0 ;
      
    function handleClick(event){
        
        let checkboxId = parseInt(event.target.id)

        if (checkboxId === 3){
          setWebSelected(!webSelected)
        }

        let service = data.find(item => item.id === checkboxId)
        sum = service.price;

        if (event.target.checked){ 
          setTotal((total += sum))
        } else if( !event.target.checked){
          setTotal((total -= sum))
        }
    }
  

  return (
    <>
    {/* <form> */}
    {cards}
    <div className='col-10'><h3 className='text-end' id='priceBox'>Total = {total}</h3></div>
    {/* <UserInfo></UserInfo>
    <button type='submit'>Enviar</button> */}
    {/* </form> */}
    </>
  )
}

export default Services