import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import SingleBook from "./components/SingleBook"
import "bootstrap/dist/css/bootstrap.min.css"
import Welcome from "./components/Welcome"
import libro from "./libro.json"
import { Container, Row } from "react-bootstrap"

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <MyNav />
      <main className="flex-grow-1 container mt-4">
        <Welcome />

        <h1 className=" text-center fw-bold">Libri Horror</h1>
        <Container>
          <Row className="justify-content-center">
            <SingleBook libro={libro} />
          </Row>
        </Container>
      </main>
      <MyFooter />
    </div>
  )
}

export default App
