import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import SingleBook from "./components/SingleBook"
import "bootstrap/dist/css/bootstrap.min.css"
import Welcome from "./components/Welcome"
import BookList from "./components/BookList"
import { Container, Row } from "react-bootstrap"
import horrorB from "./horror.json"
import NewBooklist from "./components/NewBooklist"

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <MyNav />
      <main className="flex-grow-1 container mt-4">
        <Welcome />

        <h1 className=" text-center fw-bold">Libri Horror</h1>
        <Container>
          <Row className="justify-content-center ">
            <div className="mb-5">
              <NewBooklist />
            </div>
            <BookList libri={horrorB} />
          </Row>
        </Container>
      </main>
      <MyFooter />
    </div>
  )
}

export default App
