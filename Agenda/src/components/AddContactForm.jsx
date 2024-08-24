import React from "react"

const AddContactForm = ({handleChangeName, handleChangePhone, newPhone, newName, addContact}) => {
    return (
        <>
        <form>

            <div>
            Agregar Contacto : <br />
            <input onChange={handleChangeName} value={newName} type='text' placeholder='Nombre' /><br />
            <input onChange={handleChangePhone} value={newPhone} type="tel" placeholder='Telefono' />
            </div>

            <div>
            <input type='submit' onClick={addContact} />
            </div>

        </form>
        
        </>
    )
}

export default AddContactForm