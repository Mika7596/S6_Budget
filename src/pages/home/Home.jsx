import React from 'react'
import { useState } from 'react'
import './home.css'
import Header from '../../components/atoms/header/Header'
import Services from '../../components/organisms/services/Services'
import UserInfo from '../../components/atoms/userinfo/UserInfo'
import Footer from '../../components/atoms/footer/Footer'

function Home() {
  
  let [users, setUsers] = useState([]);
  let selectedServices = [];

  function onSubmit(event){
    event.preventDefault();

    const{checkbox1, checkbox2, checkbox3, name, phone, email} = event.target;
    checkbox1.checked && selectedServices.push(checkbox1.value)
    checkbox2.checked && selectedServices.push(checkbox2.value)
    checkbox3.checked && selectedServices.push(checkbox3.value)
    setUsers([name.value, phone.value, email.value, selectedServices])
    console.log(users);
  }


  return (
    <>
    <header className="home-first"><Header></Header></header>
    <main className='home-second'>
      <form onSubmit = {onSubmit}>
      <Services></Services>
      <UserInfo></UserInfo>
      <button type='submit'>Enviar</button>
      </form>
    </main>
    <footer className='home-first'><Footer></Footer></footer>
    </>
  )
}

export default Home