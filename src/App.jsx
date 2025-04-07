import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import SingleBook from "./components/SingleBook"
import "bootstrap/dist/css/bootstrap.min.css"
import Welcome from "./components/Welcome"
import BookList from "./components/BookList"
import { Container, Row, Col } from "react-bootstrap"
import horrorB from "./horror.json"
import DinuovoBook from "./components/DinuovoBook"
import NewComment from "./components/NewComment"
import { Component } from "react"

class App extends Component {
  state = {
    selectedAsin: null,
  }

  handleBookSelect = (asin) => {
    console.log("ASIN selezionato:", asin)
    this.setState({ selectedAsin: asin })
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col lg={9} md={8} sm={12}>
            <DinuovoBook libri={horrorB} onBookSelect={this.handleBookSelect} />
          </Col>
          <Col lg={3} md={4} sm={12} className="mt-3 mt-lg-0">
            <NewComment asin={this.state.selectedAsin} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
