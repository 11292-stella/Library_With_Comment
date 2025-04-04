import React, { Component } from "react"

import CommentsList from "./CommentList"
import AddComment from "./AddComment"
const URL = "https://striveschool-api.herokuapp.com/api/comments/"

class CommentArea extends Component {
  state = {
    comment: [],
  }

  recComment = () => {
    fetch(URL + this.props.asin, {
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
        console.log("DATA", data)
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
    return (
      <div>
        <h2>COMMENTAREA</h2>

        <CommentsList comment={this.state.comment} />
        <AddComment asin={this.props.asin} />
      </div>
    )
  }
}

export default CommentArea
