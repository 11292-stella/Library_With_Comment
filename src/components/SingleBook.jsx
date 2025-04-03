import { Col, Card, Button } from "react-bootstrap"
import CommentArea from "./CommentArea"
const SingleBook = function ({ libro }) {
  return (
    <>
      <Col xs={12} sm={6} md={4} lg={2} key={libro.asin} className="mb-3">
        <Card>
          <Card.Img variant="top" src={libro.img} />
          <Card.Body>
            <Card.Title>{libro.title}</Card.Title>
            <Card.Text>Prezzo: {libro.price}€</Card.Text>
            <Card.Text>Categoria: {libro.category}</Card.Text>
            <Button variant="success">Buy</Button>
          </Card.Body>
        </Card>
        <CommentArea />
      </Col>
    </>
  )
}
export default SingleBook
