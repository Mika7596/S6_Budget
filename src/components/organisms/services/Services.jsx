import React, { useState } from 'react'
import {data} from '../../../assets/data/data'
import Card from '../../atoms/serviceCard/Card'


function Services(props) {

    const [webSelected, setWebSelected] = useState(false)
    let [numPages, setNumPages] = useState(1)
    let [numLanguages, setNumLanguages] = useState(1)
    let [total, setTotal] = useState(0)
    let sum = 0 ;

    function sendTotalValue(){
      props.getTotal(total)
    }

    function handleIncrease(event){
     
      if(event.target.value === "incPages"){
        setNumPages(numPages +=1)
        setTotal(total += 30)
      }
      
      if(event.target.value === "incLanguages"){
        setNumLanguages(numLanguages +=1)
        setTotal(total += 30)
      }
      sendTotalValue()
      
    }

    function handleDecrease(event){
      if(event.target.value === "decPages" && numPages > 1){
          setNumPages(numPages -=1)
          setTotal(total -= 30)
      }
      if (event.target.value === "decLanguages" && numLanguages > 1){
          setNumLanguages(numLanguages -=1)
          setTotal(total -= 30)
      }
      sendTotalValue()
    }

    const cards = data.map((item, i) =>{
        return <Card key={i} data={item} handleClick={handleClick} webSelected={webSelected} handleIncrease={handleIncrease} handleDecrease={handleDecrease} numPages={numPages} numLanguages={numLanguages}></Card>
      })
    
      
    function handleClick(event){
        
        let checkboxId = parseInt(event.target.id)

        if (checkboxId === 3){
          setWebSelected(!webSelected)
        }
        if(checkboxId === 3 && !event.target.checked){
          let options = numPages + numLanguages - 2
          setTotal(total -= options*30)
        }
        let service = data.find(item => item.id === checkboxId)
        sum = service.price;

        if (event.target.checked){ 
          setTotal((total += sum))
        } else if (!event.target.checked){
          setTotal((total -= sum))
        }
        sendTotalValue();
    }
  

  return (
    <>
    {cards}
    <div className='col-10'><h3 className='text-end' id='priceBox'>Total = {total}</h3></div>
    </>
  )
}

export default Services