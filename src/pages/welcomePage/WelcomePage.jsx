import React from 'react'
import './welcomePage.css'
import { useNavigate } from 'react-router-dom'

function WelcomePage() {

  let navigate = useNavigate()
  
  return (
    <main className='welcome-main'>
        <div className='welcome-container'>
        <div className='welcome-content'>
          <p className='first-line'>
          Aquesta aplicació t'ajuda a calcular el cost del nostres serveis.
          </p>
          <p className='second-line'>
            Tria els serveis que necessites per veure les tarifes.
          </p>
          <button className='btn btn-warning welcome-btn' onClick={() => navigate("/calculator")}>Som-hi!</button>
        </div>
        </div>
    </main>
  )
}

export default WelcomePage