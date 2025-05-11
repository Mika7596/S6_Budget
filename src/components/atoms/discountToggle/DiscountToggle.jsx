import React from 'react'

function DiscountToggle() {

    function handleDiscountToggle(event){
        console.log(event.target.checked)
    }


  return (
    <div className="form-check form-switch p-0 mb-5 d-flex flex-md-row flex-column align-items-center justify-content-center">
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Pagament mensual
            </label>
            <input
              className="form-check-input discount mx-md-3 mx-0 shadow-none bg-success"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={handleDiscountToggle}
              aria-label="Toggle discount"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Pagament anual
            </label>
          </div>
  )
}

export default DiscountToggle