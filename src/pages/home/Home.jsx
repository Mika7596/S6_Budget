import React from 'react'
import { useState } from 'react'
import './home.css'
import Header from '../../components/atoms/header/Header'
import Services from '../../components/organisms/services/Services'
import UserInfo from '../../components/atoms/userForm/UserInfo'
import Footer from '../../components/atoms/footer/Footer'
import UserCard from '../../components/atoms/userCard/UserCard'
import SortingButtons from '../../components/atoms/sortingButtons/SortingButtons'
import DiscountToggle from '../../components/atoms/discountToggle/DiscountToggle'


function Home() {
  
  let [users, setUsers] = useState([]);
  let [filteredList, setFilteredList] = useState([])
  let selectedServices = [];
  let [total, setTotal] = useState(0);
  let [discount, setDiscount] = useState(false);


  function getTotal(t){
    if (discount === true){
      setTotal(t*0.8)
      
    }else if (discount === false){
      setTotal(t)
    }
  }

  function getSortingValue(...value){
    let newList = []
    if (value[0] === "name"){
      newList = [...users]
      newList.sort(function (a, b) {
            if (a[0] < b[0]) {
              return -1;
            }
            if (a[0] > b[0]) {
              return 1;
            }
            return 0;
          });
      if(value[1] === true){
        newList.reverse()
      }
    } 
    else if (value[0] === "date"){
      newList = [...users]
      newList.reverse();
    }
    setUsers(newList)
  }

  function getSearchingValue(value){
    let newList = users.filter(item => item[0].includes(value));
    if(newList.length === 0){
      alert("No consta cap usuari amb el nom introduït")
    }
    setFilteredList(newList)
  }

  const filteredCards = filteredList.map((item, i) => {
    return <UserCard key={i} name={item[0]} phone={item[1]} email={item[2]} services={item[3].join(" - ")} total={item[4]}></UserCard>
  })

  function onSubmit(event){
    event.preventDefault();

    const{checkbox1, checkbox2, checkbox3, name, phone, email} = event.target;
    checkbox1.checked && selectedServices.push(checkbox1.value)
    checkbox2.checked && selectedServices.push(checkbox2.value)
    checkbox3.checked && selectedServices.push(checkbox3.value)
    
    let newUser = [name.value, phone.value, email.value, selectedServices, total];

    let existingUserIndex = users.findIndex(item => item[2] === email.value);

    if(existingUserIndex === -1){
      setUsers([...users, newUser])
    } else if (existingUserIndex !== -1){
      let newUsersList = users.map((item, i) =>{
        if (i === existingUserIndex){
          return newUser
        } else{
          return item
        }
      }
      )
      setUsers(newUsersList)
    }
    
  }

  function discountActive (value){
      setDiscount(discount = value)
  }

  const userCards = users.map((item, i) => {
    return <UserCard key={i} name={item[0]} phone={item[1]} email={item[2]} services={item[3].join(" - ")} total={item[4]}></UserCard>
  })

  return (
    <>
    <header className="home-first"><Header></Header></header>
    <main className='home-second'>
      <DiscountToggle discountActive={discountActive}></DiscountToggle>
      <form onSubmit = {onSubmit} className='form'>
      <Services getTotal={getTotal} discount={discount}></Services>
      <UserInfo></UserInfo>
      <button type='submit' className='btn btn-success rounded'>Enviar</button>
      </form>
    </main>
    {users.length > 0 && <SortingButtons users={users} getSortingValue={getSortingValue} getSearchingValue={getSearchingValue}></SortingButtons>}
    {filteredList.length > 0 ? filteredCards : users.length > 0 && userCards}
    <footer className='home-first'><Footer></Footer></footer>
    </>
  )
}

export default Home