import { Component } from "react"
import HorrorB from "../horror.json"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Col, Container, Row } from "react-bootstrap"

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          {HorrorB.map((book) => (
            <Col xs={12} sm={6} md={4} lg={2} key={book.asin} className="mb-3">
              <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>Prezzo: {book.price}€</Card.Text>
                  <Card.Text>Categoria: {book.category}</Card.Text>
                  <Button variant="success">Buy</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}
export default AllTheBooks
