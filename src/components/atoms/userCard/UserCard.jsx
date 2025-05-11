import React from 'react'

function UserCard(props) {
  return (
    <div className={`rounded-4 shadow mb-3 p-4 col-10 m-auto d-flex justify-content-around`}>
        <div>
            <h4>{props.name}</h4>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
        <div>
            <h5>Serveis contractats:</h5>
            <p>{props.services}</p>
        </div>
        <div>
            <h4>Total:</h4>
            <h5>{props.total}</h5>
        </div>
    </div>
  )
}

export default UserCard