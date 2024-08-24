import React from "react"

const Contact = ({ contact, deleteContact }) => {
    return (
      <li>
        <strong>{contact.name}</strong> : {contact.phone}
        <button onClick={() => deleteContact(contact.id)}>Borrar</button>
      </li>
    )
  }

  export default Contact