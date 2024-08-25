import React from "react"

const AddContactForm = ({handleChangeName, handleChangePhone, newPhone, newName, addContact}) => {
    return (
        <>
        <form>

            <div className="text-fields">
            <input className='name' onChange={handleChangeName} value={newName} type='text' placeholder='Nombre'/>
            <input className='phone' onChange={handleChangePhone} value={newPhone} type="tel" placeholder='Telefono'/>
            </div>

            <input className="submit" type='submit' onClick={addContact} />

        </form>
        
        </>
    )
}

export default AddContactForm