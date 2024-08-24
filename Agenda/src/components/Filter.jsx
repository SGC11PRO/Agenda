import React from "react"
import Contact from './Contact'

const Filter = ({ filteredContacts, handleChangeFilter }) => {
    return (
        <>
        <input type='text' placeholder='Búsqueda' onChange={handleChangeFilter}/>

        <ul>
            {filteredContacts.map(contact =>
                <Contact contact={contact.name} number={contact.phone} key={contact.name}/>
            )}
        </ul>
        </>
    )
}

export default Filter