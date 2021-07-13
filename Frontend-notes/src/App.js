import './App.css'
import { useState, useEffect } from 'react'
import noteService from './services/notes.js'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
function App() {

  const [notesList, setNotesList] = useState([])

  useEffect(() => {
    noteService.getAll()
      .then((notes) => {
        setNotesList(notes)
      })
      .catch((err) => {
        console.error('err in fetching: ', err)
      })
  }, [])

  const deleteNote = (evt) => {
    console.log('delete is starting')
    noteService.del(evt.target.id)
    const updatedList = notesList.filter(note => note.id !== evt.target.id)
    setNotesList(updatedList)
  }
  return (
    <div class='outer'>
      <Container fluid>
        <Row>
          {notesList.map((note, index) => {
            return (<Col key={note.id}>
              <Card text='light' border='warning' bg='dark' key={note.id} style={{ width: '18rem' }}>
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