import { useState } from 'react'
import Contact from './components/Contact'

const App = () => {
  const [contacts, setContacts] = useState([]) 
  const [newName, setNewName] = useState('')

  const handleChange = (event) => {

    setNewName(event.target.value) // recuperar el input
  }

  const addContact = (event) => {

    event.preventDefault()

    const newContact = {
      id: contacts.length + 1,
      name: newName
    }

    // añadir al array
    newContact.name.length === 0 
      ? console.error('Ingresa un nombre para guardar el contacto') 
      : setContacts(contacts.concat(newContact))

    console.log(contacts)

    // limpiar input
    setNewName('')
  }

  return (
    <div>
      <h2>Contactos</h2>
      <ul>
          {contacts.map(note =>
            <Contact contact={note.name} key={note.id}/>
          )}
      </ul>

      <form>

        <div>
          Agregar Contacto : <input onChange={handleChange} value={newName}/>
        </div>

        <div>
          <button onClick={addContact}>Añadir</button>
        </div>

      </form>
    </div>
  )
}

export default App