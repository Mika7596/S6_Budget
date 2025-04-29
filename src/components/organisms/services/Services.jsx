import React from 'react'
import {data} from '../../../assets/data/data'
import Card from '../../atoms/card/Card'
import './services.css'
import UserInfo from '../../atoms/userinfo/UserInfo';

function Services() {
  let total = 0;

  const cards = data.map((item, i) =>{
    return <Card key={i} data={item}></Card>
  })

  function onSubmit(e){
    e.preventDefault();
    const {checkbox1, checkbox2, checkbox3} = e.target
    const checkboxList = [[checkbox1, 1], [checkbox2, 2], [checkbox3,3]]
    const selectedServices = [];
    checkboxList.map(item => {
      item[0].checked && selectedServices.push(item[1])
    })
    console.log(selectedServices)
  }

  return (
    <>
    <form onSubmit={onSubmit}>
    {cards}
    <div className='col-10'><h3 className='text-end'>Total = {total}</h3></div>
    <UserInfo></UserInfo>
    <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Services