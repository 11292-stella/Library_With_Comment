import React, { Component } from "react"

const URL = "https://striveschool-api.herokuapp.com/api/comments/"

class NewComment extends Component {
  state = {
    comments: [],
    newComment: "", // dove memorizziamo quello che scrive l’utente
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      console.log("ASIN cambiato:", this.props.asin)
      this.fetchComments()
    }
  }

  fetchComments = () => {
    if (!this.props.asin) return
    fetch(URL + this.props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMjcwMzM4MzRiZjAwMTUwMDA3MDAiLCJpYXQiOjE3NDM2ODQ3MzYsImV4cCI6MTc0NDg5NDMzNn0.qS52rTci0AyAlbwFKzIjMXL4LY5O0JxHJizWLUJHWUM",
      },
    })
      .then((response) => response.json())
      .then((data) => this.setState({ comments: data }))
      .catch((error) => console.log("Errore nel fetch:", error))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { newComment } = this.state
    const { asin } = this.props

    if (!newComment || !asin) return

    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        comment: newComment,
        rate: 5, // rate fisso
        elementId: asin,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMjcwMzM4MzRiZjAwMTUwMDA3MDAiLCJpYXQiOjE3NDM2ODQ3MzYsImV4cCI6MTc0NDg5NDMzNn0.qS52rTci0AyAlbwFKzIjMXL4LY5O0JxHJizWLUJHWUM",
      },
    })
      .then((res) => res.json())
      .then(() => {
        this.setState({ newComment: "" })
        this.fetchComments()
      })
      .catch((error) => console.log("Errore POST:", error))
  }

  render() {
    const { comments, newComment } = this.state
    const { asin } = this.props

    return (
      <div>
        <h2>Commenti</h2>
        {asin ? (
          <>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Scrivi un commento..."
                value={newComment}
                onChange={(e) => this.setState({ newComment: e.target.value })}
              />
              <button type="submit">Invia</button>
            </form>
            <h4>Commenti esistenti:</h4>
            <ul>
              {comments.length > 0 ? (
                comments.map((c, i) => <li key={i}>{c.comment}</li>)
              ) : (
                <li>Nessun commento ancora.</li>
              )}
            </ul>
          </>
        ) : (
          <p>Seleziona un libro per vedere i commenti</p>
        )}
      </div>
    )
  }
}

export default NewComment
