import React from "react"
import './Card.css'

const Contact = ({ contact, deleteContact }) => {
    return (
      <li className="contacts-list">
        <div className="contact-details">
          <p className="contact-name"><strong>{contact.name}</strong></p>
          <p className="contact-phone">{contact.phone}</p>
        </div>

        <button className='delete-contact-btn' onClick={() => deleteContact(contact.id)}>
          <svg className='icon' class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
          </svg>
        </button>
      </li>
    )
  }

  export default Contact