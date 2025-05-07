import React, { useState } from 'react'
import {data} from '../../../assets/data/data'
import Card from '../../atoms/card/Card'
import './services.css'
import UserInfo from '../../atoms/userinfo/UserInfo';
import Total from '../../atoms/total/Total';

function Services() {
  const clients = []
  const [webSelected, setWebSelected] = useState(false)
  
  const cards = data.map((item, i) =>{
    return <Card key={i} data={item} handleClick={handleClick} webSelected={webSelected}></Card>
  })
  
  let [selectedServices, setSelectedServices] = useState([])
  let [total, setTotal] = useState(0)
  let newSum = 0;
console.log(total);

  function handleClick (event){
    const value = parseInt(event.target.value);
    let myPromise = null;
console.log(event.target.value);

    // if (event.target.id == "data-3"){
    //   setWebSelected(!webSelected)
    // }

    if (event.target.checked === true){
      newSum += value
     
      // myPromise = new Promise (function (resolve) {
      //   setSelectedServices([...selectedServices, value]);
      //   newSum = selectedServices.reduce((acc, p) =>{ return acc + p}, 0);
      //   resolve(newSum)  
      // })
      
    } else if (event.target.checked === false){
      newSum -= value;
      setWebSelected(false)
      
      // myPromise = new Promise(function (resolve){
      //   const filteredList = selectedServices.filter (item => item !== value)
      //   setSelectedServices(filteredList)
      //   newSum = selectedServices.reduce((acc, p) =>{ return acc + p}, 0);
      //   resolve(newSum)
      //   document.getElementById("priceBox").innerText = `El valor total és ${newSum}`
      // })
    }
    // myPromise.then(newSum => {setTotal(newSum)})
    // document.getElementById("priceBox").innerText = `El valor total és ${newSum}`
    setTotal(newSum)
    //console.log(total)
  }

  function onSubmit(e){
    e.preventDefault();
    const {checkbox1, checkbox2, checkbox3, name, phone, email} = e.target
    const checkboxList = [[checkbox1, 1], [checkbox2, 2], [checkbox3,3]]
    const selectedServices = [];
    checkboxList.map(item => {
      item[0].checked && selectedServices.push(item[1])
    })
    clients.push([name.value, phone.value, email.value, selectedServices])
    console.log(clients)
  }


  return (
    <>
    <form onSubmit={onSubmit}>
    {cards}
    <div className='col-10'><h3 className='text-end' id='priceBox'>Total = {total}</h3></div>
    <Total total={total}></Total>
    <UserInfo></UserInfo>
    <button type='submit'>Enviar</button>
    </form>
    </>
  )
}

export default Services