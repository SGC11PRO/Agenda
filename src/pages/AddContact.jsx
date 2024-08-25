import React from "react"
import AddContactForm from "../components/AddContactForm"

import './addContact.css'
import background from './../../dist/Gradient.png'


const AddContact = ({ addContact, handleChangeName, handleChangePhone, newName, newPhone}) => {
    return(
        <>
        <img src={background}/>
        <div className="add-page">
            <h2>Crear Contacto</h2>
            <AddContactForm className='form' 
                addContact={addContact} 
                handleChangeName={handleChangeName} 
                handleChangePhone={handleChangePhone} 
                newName={newName} 
                newPhone={newPhone}
            />

        <p className="hint">Usa la sección superior para navegar entre páginas</p>

        </div>
        </>
    )
}

export default AddContact