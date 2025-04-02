import React, { Component } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"

import horrorB from "../horror.json"
import SingleBook from "./SingleBook"

class NewBooklist extends Component {
  state = {
    inizioRicerca: "",
    libri: horrorB,
  }
  cambioRicerca = (event) => {
    this.setState({
      inizioRicerca: event.target.value,
    })
  }

  render() {
    const libriFiltrati = this.state.libri.filter((libro) =>
      libro.title.toLowerCase().includes(this.state.inizioRicerca.toLowerCase())
    )
    return (
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Cerca un libro</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Cerca"
                  value={this.state.inizioRicerca}
                  onChange={this.cambioRicerca}
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
}
export default NewBooklist
