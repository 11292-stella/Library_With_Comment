import { Component } from "react"
import { Col, Card, Button } from "react-bootstrap"
import CommentArea from "./CommentArea"
class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    const { libro } = this.props
    return (
      <Col xs={12} sm={6} md={4} lg={2} key={libro.asin} className="mb-3">
        <Card
          style={{ border: this.state.selected ? "3px solid red" : "none" }}
        >
          <Card.Img
            variant="top"
            src={libro.img}
            onClick={() => {
              // Invia l'asin al genitore quando si clicca sull'immagine del libro
              this.setState({ selected: !this.state.selected })
              this.props.onBookSelect(libro.asin) // Passa l'asin selezionato al genitore
            }}
          />
          <Card.Body>
            <Card.Title>{libro.title}</Card.Title>
            <Card.Text>Prezzo: {libro.price}€</Card.Text>
            <Card.Text>Categoria: {libro.category}</Card.Text>
            <Button variant="success">Buy</Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default SingleBook
