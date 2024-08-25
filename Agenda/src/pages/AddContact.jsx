import React from "react"
import AddContactForm from "../components/AddContactForm"

import './addContact.css'

const AddContact = ({ addContact, handleChangeName, handleChangePhone, newName, newPhone}) => {
    return(
        <>
        <img src="./../../public/Gradient.png" />
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