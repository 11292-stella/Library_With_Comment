import React, { Component } from "react"
import { Container, Row, Col, ListGroup } from "react-bootstrap"

const URL = "https://striveschool-api.herokuapp.com/api/comments"

class CommentArea extends Component {
  state = {
    comment: [],
    elementId: this.props.asin,
  }

  recComment = () => {
    fetch(URL, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMjcwMzM4MzRiZjAwMTUwMDA3MDAiLCJpYXQiOjE3NDM2ODQ3MzYsImV4cCI6MTc0NDg5NDMzNn0.qS52rTci0AyAlbwFKzIjMXL4LY5O0JxHJizWLUJHWUM",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore nella fetch")
        }
      })
      .then((data) => {
        console.log("commenti", data)
        this.setState({
          comment: data,
        })
      })
      .catch((err) => {
        console.log("errore", err)
      })
  }

  componentDidMount() {
    this.recComment()
  }

  render() {
    const { comment, elementId } = this.state

    return (
      <>
        <Container>
          <Row className="justify-content-center my-5">
            <Col>
              {elementId && (
                <ListGroup>
                  {comment.map((vercom, i) => (
                    <ListGroup.Item key={i}>{vercom.comment}</ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default CommentArea
