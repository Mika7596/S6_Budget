import React from 'react'

function PagesAndLanguages() {
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
        <span className='px-2 bg-secondary bg-gradient rounded'>-</span>
          <span className="mx-2 border border-1 rounded px-3 fw-semibold">
            hola
          </span>
          <span className='px-2 bg-secondary bg-gradient rounded'>+</span>
    </div>
    
    </>
  )
}

export default PagesAndLanguages
