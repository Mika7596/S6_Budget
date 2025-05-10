import React from 'react'
import './userinfo.css'

function UserInfo() {
  return (
    <>
    <div className={`card rounded-4 shadow mb-3 p-4 col-10 m-auto`}>
        <h3>Demanar Pressupost</h3>
        <input type="text" className={`col-4 m-auto mb-3`} placeholder="Nom" name ="name" pattern='[a-zA-ZñÑçÇáàÁÀéèÉÈíÍóòÓÒúÚ ]+' minLength={3} maxLength={15} required/>
        <input type="number" className={`col-4 m-auto mb-3`} placeholder='Telèfon' name="phone" min="111111111" max="999999999" pattern='[0-9]{9}' required/>
        <input type="email" className={`col-4 m-auto mb-3`} placeholder='Email'  name ="email" required/>
    </div>
    </>
  )
}

export default UserInfo