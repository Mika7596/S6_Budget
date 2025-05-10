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

  function getTotal(t){
    setTotal(t)
  }
  function onSubmit(event){
    event.preventDefault();

    const{checkbox1, checkbox2, checkbox3, name, phone, email} = event.target;
    checkbox1.checked && selectedServices.push(checkbox1.value)
    checkbox2.checked && selectedServices.push(checkbox2.value)
    checkbox3.checked && selectedServices.push(checkbox3.value)
    let newUser = [name.value, phone.value, email.value, selectedServices, total]
    setUsers([...users, newUser])
    console.log(users);
  }

  const userCards = users.map((item, i) => {
    return <UserCard key={i} name={item[0]} phone={item[1]} email={item[2]} services={item[3].join(" - ")} total={item[4]}></UserCard>
  })

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
    {users && userCards}
    <footer className='home-first'><Footer></Footer></footer>
    </>
  )
}

export default Home