import React, { useState } from 'react'
import {data} from '../../../assets/data/data'
import Card from '../../atoms/card/Card'
import UserInfo from '../../atoms/userinfo/UserInfo';

function TestingComponent() {

    const [webSelected, setWebSelected] = useState(false)

    const cards = data.map((item, i) =>{
        return <Card key={i} data={item} handleClick={handleClick} webSelected={webSelected}></Card>
      })

    
    let selectedServices = []
    let [total, setTotal] = useState(0)
      
      function handleClick(event){
        let sum = 0;
        console.log(event.target.id)
        let checkboxId = parseInt(event.target.id)
        let value=parseInt(event.target.value)

        
        if (selectedServices.includes(checkboxId)){
            selectedServices = selectedServices.filter (item => item !== checkboxId) 
        } 
        else if(!selectedServices.includes(checkboxId)){
            selectedServices.push(checkboxId)
        }
        
        data.map(item => {
            if(selectedServices.includes(item.id)) {
                sum += item.price
                console.log(item.price);
            }    
        })

        console.log(selectedServices);
        console.log(sum)
        //setTotal(total = sum)
        
    }







  return (
    <>
    <form>
    {cards}
    <div className='col-10'><h3 className='text-end' id='priceBox'>Total = {total}</h3></div>
    <UserInfo></UserInfo>
    <button type='submit'>Enviar</button>
    </form>
    </>
  )
}

export default TestingComponent