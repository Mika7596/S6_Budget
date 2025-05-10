import React from 'react'
import Header from '../../components/atoms/header/Header'
import { useNavigate } from 'react-router-dom';

function NotFound() {
    let navigate = useNavigate();
  return (
    <>
    <Header></Header>
    <div>
        <p>No hem trobat la pàgina que busques.</p>
        <p>Estàs segur que has introduït bé l'adreça?</p>
        <button className='btn btn-danger' onClick={() => navigate("/")}>Tornar a la pàgina d'inici</button>
    </div>
    </>
  )
}

export default NotFound