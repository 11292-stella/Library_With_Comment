import { Container, Row, Col } from "react-bootstrap"

const MyFooter = function () {
  return (
    <Container fluid className="bg-dark text-light mt-auto py-3">
      <Row>
        <Col className="text-center text-light">
          © {new Date().getFullYear()} - Books
        </Col>
      </Row>
    </Container>
  )
}

export default MyFooter
