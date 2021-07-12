
import { useState, useEffect } from 'react'
import noteService from './services/notes.js'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
function App() {

  const [notesList, setNotesList] = useState([])

  useEffect(() => {
    console.log(notesList)
    noteService.getAll()
      .then((notes) => {
        setNotesList(notes)
        console.log('notes are', notesList)
      })
      .catch((err) => {
        console.error('err in fetching: ', err)
        console.log('wtf is noteslist ', notesList)
      })
  }, [])

  const deleteNote = (evt) => {
    console.log('delete is starting')
    noteService.del(evt.target.id)
    const updatedList = notesList.filter(note => note.id !== evt.target.id)
    setNotesList(updatedList)
  }
  return (
    <div>
      <Container fluid>
        <Row>
          {notesList.map((note, index) => {
            return (<Col>
              <Card key={note.id} style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>#{index + 1}</Card.Title>
                  <Card.Text>
                    <a href={note.content} rel="noreferrer" target="_blank">{note.content}</a>
                  </Card.Text>
                  <Button variant="danger" id={note.id} onClick={deleteNote}>Delete</Button>
                </Card.Body>
              </Card>
            </Col>)
          })
          }
        </Row>
      </Container>
    </div>
  );
}

export default App;