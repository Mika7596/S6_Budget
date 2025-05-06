import React from 'react'


function Card(props) {
  return (
    <div className={`card rounded-4 shadow mb-3 p-4 col-10 m-auto`}>
      <div className="row g-3 align-items-center">
                
                <div className="col-12 col-md-6">
                    <h4 className="card-title">{props.data.title}</h4>
                    <p className="card-text">{props.data.description}</p>
                </div>

                
                <div className="col-6 col-md-3 text-md-end">
                    <h2 className="mb-0">{props.data.price}€</h2>
                </div>

                
                <div className="col-6 col-md-3">
                    <div className="d-flex align-items-center justify-content-end">
                        <input
                            className="form-check-input me-2 border-success"
                            type="checkbox"
                            id={`data-${props.data.id}`}
                            name = {`checkbox${props.data.id}`}
                            onChange = {props.handleClick}
                            value = {props.data.price}
                        />
                        <label className="form-check-label" htmlFor={`data-${props.data.id}`}>
                        </label>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Card