import React from 'react'
import {data} from '../../../assets/data/data'
import Card from '../../atoms/card/Card'

function Services() {

  const cards = data.map((item, i) =>{
    
    return <Card key={i} data={item}></Card>
  })
  return (
    <>
    {cards}
    hola
    </>
  )
}

export default Services