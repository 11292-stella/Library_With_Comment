import { Component } from "react"
import { Form, Button } from "react-bootstrap"

const URL = "https://striveschool-api.herokuapp.com/api/comments/"

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "3",
      elementId: this.props.asin,
    },
  }

  sendComment = (e) => {
    e.preventDefault()

    fetch(URL, {
      method: "POST",
      body: JSON.stringify(this.state.comment),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMjcwMzM4MzRiZjAwMTUwMDA3MDAiLCJpYXQiOjE3NDM2ODQ3MzYsImV4cCI6MTc0NDg5NDMzNn0.qS52rTci0AyAlbwFKzIjMXL4LY5O0JxHJizWLUJHWUM",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Commento inviato con successo!")
          this.setState({
            comment: {
              comment: "",
              rate: "3",
              elementId: this.props.asin,
            },
          })
        } else {
          throw new Error("Errore nell'invio del commento")
        }
      })
      .catch((err) => {
        console.log("Errore:", err)
      })
  }

  render() {
    return (
      <Form onSubmit={this.sendComment}>
        <Form.Group className="mb-3">
          <Form.Label>Testo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Scrivi un commento..."
            value={this.state.comment.comment}
            required
            onChange={(e) => {
              this.setState({
                comment: {
                  ...this.state.comment,
                  comment: e.target.value,
                },
              })
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Voto</Form.Label>
          <Form.Select
            value={this.state.comment.rate}
            onChange={(e) => {
              this.setState({
                comment: {
                  ...this.state.comment,
                  rate: e.target.value,
                },
              })
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>
        <Button variant="success" type="submit">
          INVIA
        </Button>
      </Form>
    )
  }
}

export default AddComment
