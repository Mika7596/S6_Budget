import React from 'react'

function PagesAndLanguages(props) {
  return (
    <>
    <div className="mb-3 d-flex align-items-center justify-content-end col-12">
        <i
          className="bi bi-info-circle fs-5 text-info"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#pagesHelpModal"
        >?</i>
        <span className="mb-0 mx-1 mx-sm-3">Pages</span>
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
          data-bs-toggle="modal"
          data-bs-target="#pagesHelpModal"
        >?</i>
        <span className="mb-0 mx-1 mx-sm-3">Languages</span>
        <button className='px-2 bg-secondary bg-gradient rounded' onClick={props.handleDecrease}value="decLanguages">-</button>
          <span className="mx-2 border border-1 rounded px-3 fw-semibold" value="languages">
            {props.numLanguages}
          </span>
          <button className='px-2 bg-secondary bg-gradient rounded' onClick={props.handleIncrease} value="incLanguages">+</button>
    </div>
    
    </>
  )
}

export default PagesAndLanguages
