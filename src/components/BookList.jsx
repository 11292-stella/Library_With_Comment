import { Row } from "react-bootstrap"
import SingleBook from "./SingleBook"

const BookList = function ({ libri }) {
  return (
    <Row className="justify-content-center">
      {libri.map((libro) => (
        <SingleBook key={libro.asin} libro={libro} />
      ))}
    </Row>
  )
}

export default BookList
