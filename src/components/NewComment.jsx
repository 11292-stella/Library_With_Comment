import React, { Component } from "react"
import CommentsList from "./CommentList"
import AddComment from "./AddComment"

const URL = "https://striveschool-api.herokuapp.com/api/comments/"

class NewComment extends Component {
  state = {
    comments: [],
  }

  fetchComments = () => {
    const { asin } = this.props
    if (!asin) return

    fetch(URL + asin, {
      headers: {
        Authorization: "Bearer <TOKEN>",
      },
    })
      .then((response) => response.json())
      .then((data) => this.setState({ comments: data }))
      .catch((error) => console.log("Errore:", error))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments()
    }
  }

  render() {
    const { comments } = this.state
    const { asin } = this.props

    return (
      <div>
        <h2>Commenti</h2>
        {asin ? (
          <>
            <CommentsList comments={comments} />
            <AddComment asin={asin} />
          </>
        ) : (
          <p>Seleziona un libro per vedere i commenti</p>
        )}
      </div>
    )
  }
}

export default NewComment
