import { useState } from 'react'
import Contact from './components/Contact'

const App = () => {
  const [contacts, setContacts] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')


  const handleChangeName = (event) => {

    setNewName(event.target.value) // recuperar el input
  }

  const handleChangePhone = (event) => {
    setNewPhone(event.target.value) // recuperar el input 2
  }

  const addContact = (event) => {

    event.preventDefault()

    const newContact = {
      name: newName,
      phone: newPhone
    }

    // verifica si el contacto ya existe
    const contactExists = contacts.some(contact => contact.name === newContact.name)

    if(contactExists) {
      alert(`[ ! ] El contacto ${newContact.name} ya existe. No puedes añadir un contacto existente`)
    }
    else 
    {
      // añadir al array
      newContact.name.length === 0 || newContact.phone.length === 0
        ? alert('Rellena todos los campos para continuar') 
        : setContacts(contacts.concat(newContact))

    }

    // limpiar input
    setNewName('')
    setNewPhone('')
  }

  return (
    <div>
      <h2>Contactos</h2>
      <ul>
          {contacts.map(contact =>
            <Contact contact={contact.name} number={contact.phone} key={contact.name}/>
          )}
      </ul>

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
    </div>
  )
}

export default App