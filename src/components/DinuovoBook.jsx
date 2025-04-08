import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"
import SingleBook from "./SingleBook"

const DinuovoBook = function (props) {
  const { libri, onBookSelect } = props // Ricevi onBookSelect da App
  return (
    <Row>
      {libri.map((libro) => (
        <Col key={libro.asin} sm={6} md={4} lg={3}>
          <SingleBook
            libro={libro}
            onBookSelect={onBookSelect} // Passa onBookSelect a SingleBook
          />
        </Col>
      ))}
    </Row>
  )
}

export default DinuovoBook
