import { useState } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"

import horrorB from "../horror.json"
import SingleBook from "./SingleBook"

const NewBooklist = function () {
  //state = {
  //inizioRicerca: "",
  //libri: horrorB,
  //}

  const [inizioRicerca, setInizioRicerca] = useState("")
  const [libri, setLibri] = useState(horrorB)

  const cambioRicerca = (event) => {
    setInizioRicerca(event.target.value)
  }

  const libriFiltrati = libri.filter((libro) =>
    libro.title.toLowerCase().includes(inizioRicerca.toLowerCase())
  )
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Cerca un libro</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cerca"
                value={inizioRicerca}
                onChange={cambioRicerca}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {libriFiltrati.map((libro) => (
          <SingleBook key={libro.asin} libro={libro} />
        ))}
      </Row>
    </Container>
  )
}
export default NewBooklist
