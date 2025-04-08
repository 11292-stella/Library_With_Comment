import { useState } from "react"
import { Col, Card, Button } from "react-bootstrap"
import CommentArea from "./CommentArea"
const SingleBook = function (props) {
  //state = {
  // selected: false,
  // }

  const [selected, setSelected] = useState(false)

  const libro = props.libro
  return (
    <Col key={libro.asin} className="mb-3">
      <Card style={{ border: selected ? "3px solid red" : "none" }}>
        <Card.Img
          variant="top"
          src={libro.img}
          onClick={() => {
            // Invia l'asin al genitore quando si clicca sull'immagine del libro
            setSelected(!selected)
            props.onBookSelect(libro.asin) // Passa l'asin selezionato al genitore
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

export default SingleBook
