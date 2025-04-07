import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"
import SingleBook from "./SingleBook"

class DinuovoBook extends Component {
  render() {
    const { libri, onBookSelect } = this.props
    return (
      <Row>
        {libri.map((libro) => (
          <Col key={libro.asin} sm={6} md={4} lg={3}>
            <SingleBook
              libro={libro}
              onClick={() => onBookSelect(libro.asin)} // Passiamo l'asin al selezionare un libro
            />
          </Col>
        ))}
      </Row>
    )
  }
}

export default DinuovoBook
