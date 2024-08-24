import React from "react"
import AddContactForm from "../components/AddContactForm"

const AddContact = ({ addContact, handleChangeName, handleChangePhone, newName, newPhone}) => {
    return(
        <>
        <AddContactForm 
            addContact={addContact} 
            handleChangeName={handleChangeName} 
            handleChangePhone={handleChangePhone} 
            newName={newName} 
            newPhone={newPhone}
        />
        </>
    )
}

export default AddContact