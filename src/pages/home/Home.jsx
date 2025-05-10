import React from 'react'
import { useState } from 'react'
import './home.css'
import Header from '../../components/atoms/header/Header'
import Services from '../../components/organisms/services/Services'
import UserInfo from '../../components/atoms/userForm/UserInfo'
import Footer from '../../components/atoms/footer/Footer'
import UserCard from '../../components/atoms/userCard/UserCard'

function Home() {
  
  let [users, setUsers] = useState([]);
  let selectedServices = [];
  let [total, setTotal] = useState(0)

  function onSubmit(event){
    event.preventDefault();

    const{checkbox1, checkbox2, checkbox3, name, phone, email} = event.target;
    checkbox1.checked && selectedServices.push(checkbox1.value)
    checkbox2.checked && selectedServices.push(checkbox2.value)
    checkbox3.checked && selectedServices.push(checkbox3.value)
    setUsers([name.value, phone.value, email.value, selectedServices])
    console.log(users);
  }

  function getTotal(t){
    setTotal(t)
  }


  return (
    <>
    <header className="home-first"><Header></Header></header>
    <main className='home-second'>
      <form onSubmit = {onSubmit}>
      <Services getTotal={getTotal}></Services>
      <UserInfo></UserInfo>
      <button type='submit'>Enviar</button>
      </form>
    </main>
    <UserCard username={users[0]} phone={users[1]} email={users[2]} selectedServices={users[3]}total={total}></UserCard>
    <footer className='home-first'><Footer></Footer></footer>
    </>
  )
}

export default Home