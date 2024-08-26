import React from "react"
import Contact from './Contact'

const Filter = ({ filteredContacts, handleChangeFilter, deleteContact }) => {
    return (
        <>
        <input className='filter' type='text' placeholder='Búsqueda' onChange={handleChangeFilter}/>

        <ul className="contacts-area">
            {filteredContacts.map(contact =>
                <Contact 
                    contact={contact} 
                    key={contact.id}
                    deleteContact={deleteContact}
                />
            )}
        </ul>
        </>
    )
}

export default Filter