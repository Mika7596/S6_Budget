import React from 'react'
import './welcomePage.css'
import image from '../../assets/header.jpg'

function WelcomePage() {
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
          <button className='btn btn-warning welcome-btn'>Som-hi!</button>
        </div>
        </div>
    </main>
  )
}

export default WelcomePage