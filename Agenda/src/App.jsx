import Note from "./components/Note"
import { useState, useEffect } from 'react'

const App = () => {

  // almacenar las notas en un estado del componente
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  // funcion para añadir nueva nota
  const addNote = (event) => {

    event.preventDefault() // evita recargar la pagina al enviar el evento

    // creamos el objeto de la nota
    const noteObject = {
      content: newNote,
      id: notes.length + 1,
      important: Math.random > 0.5
    }

    // actualizamos el array de notas
    setNotes(notes.concat(noteObject))
    
    console.log(noteObject)

    // limpiamos el input field
    setNewNote('')


  }

  const handleNoteChange = (event) => {

    setNewNote(event.target.value) // sincroniza el contenido del input, con el valor de la newNote
  }

  return (
    <>

      <h1>Notes</h1>

      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note}/>
        )}
      </ul>

      <form>
        <input value={newNote} onChange={handleNoteChange}/>
        <button onClick={addNote}>Create</button>
      </form>

    </>
  )
}

export default App