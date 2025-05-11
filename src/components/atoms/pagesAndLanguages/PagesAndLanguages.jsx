import React from 'react'
import HelpModal from '../helpModal/HelpModal'
import { useState } from 'react';

function PagesAndLanguages(props) {
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      let [element,setElement] = useState("")

  function handleShow (event){
    setShow(true);
    if(event.target.id == "modalPages"){
      setElement("pàgines")
    } else{
      setElement("llengües")
    }
  }

  return (
    <>
    <div className="mb-3 d-flex align-items-center justify-content-end col-12">
        <i
          className="bi bi-info-circle fs-5 text-info"
          type="button"
          onClick={handleShow}
          id='modalPages'
        >?</i>
        <span className="mb-0 mx-1 mx-sm-3">Pàgines</span>
        <button className='px-2 bg-secondary bg-gradient rounded' onClick={props.handleDecrease}value="decPages" >-</button>
          <span className="mx-2 border border-1 rounded px-3 fw-semibold">
            {props.numPages}
          </span>
          <button className='px-2 bg-secondary bg-gradient rounded' onClick={props.handleIncrease} value="incPages">+</button>
    </div>
    <div className="mb-3 d-flex align-items-center justify-content-end col-12">
        <i
          className="bi bi-info-circle fs-5 text-info"
          type="button"
          onClick={handleShow}
          id='modalLanguages'
        >?</i>
        <span className="mb-0 mx-1 mx-sm-3">Llengües</span>
        <button className='px-2 bg-secondary bg-gradient rounded' onClick={props.handleDecrease}value="decLanguages">-</button>
          <span className="mx-2 border border-1 rounded px-3 fw-semibold" value="languages">
            {props.numLanguages}
          </span>
          <button className='px-2 bg-secondary bg-gradient rounded' onClick={props.handleIncrease} value="incLanguages">+</button>
    </div>
    
    <HelpModal show={show} handleClose={handleClose} element={element}>
    </HelpModal> 
    </>
  )
}

export default PagesAndLanguages
