import React from 'react'
import './notFound.css'
import Header from '../../components/atoms/header/Header'
import { useNavigate } from 'react-router-dom';

function NotFound() {
    let navigate = useNavigate();
  return (
    <>
    <div className="notFound-first"><Header></Header></div>
    <div className='col-10 mt-5 mx-auto text-center'>
        <h3 className='mt-4 notFound-second'>No hem trobat la pàgina que busques.</h3>
        <h4 className='mt-5 notFound-third'>Estàs segur que has introduït bé l'adreça?</h4>
        <button className='btn btn-danger mt-5 notFound-fourth' onClick={() => navigate("/")}>Tornar a la pàgina d'inici</button>
    </div>
    </>
  )
}

export default NotFound