import React from "react"
import Filter from "../components/Filter"

import './Homepage.css'
import background from './../../dist/Gradient.png'


const Homepage = ({ filteredContacts, handleChangeFilter, deleteContact, redirectToNewContact}) => {

    if(filteredContacts.length > 0) // si hay contactos, todo normal
    {
        return (
            <>
                <img src={background}/>
                <div className="homepage">
                    <h2>Contactos</h2>
                    
                    <div className="card">
                        <Filter filteredContacts={filteredContacts} handleChangeFilter={handleChangeFilter} deleteContact={deleteContact}/> 
                    </div>

                    <footer className="hint">Usa la sección superior para navegar entre páginas</footer>
                </div>
            </>
        )
    }
    else  // sino hay contactos, muestra un mensaje que indica que se debe crear un nuevo contacto antes
    {
        return (
            <>
                <img src="./../../public/Gradient.png"/>
                <div className="homepage">
                    <h2>Contactos</h2>
                    <p className="alert">Crea un nuevo contacto para empezar.</p>
                    <p className="hint">Usa la sección superior para navegar entre páginas</p>
                </div>
            </>
        )
    }
}

export default Homepage