import React, { useState, useEffect } from "react"

const URL = "https://striveschool-api.herokuapp.com/api/comments/"

const NewComment = function (props) {
  //state = {
  // comments: [],
  //newComment: "", // dove memorizziamo quello che scrive l’utente
  //}

  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState("")

  //componentDidUpdate(prevProps) {
  //if (prevProps.asin !== this.props.asin) {
  //console.log("ASIN cambiato:", this.props.asin)
  //this.fetchComments()
  // }
  // }//

  useEffect(() => {
    fetchComments()
  }, [props.asin])

  const fetchComments = () => {
    if (!props.asin) return
    fetch(URL + props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMjcwMzM4MzRiZjAwMTUwMDA3MDAiLCJpYXQiOjE3NDM2ODQ3MzYsImV4cCI6MTc0NDg5NDMzNn0.qS52rTci0AyAlbwFKzIjMXL4LY5O0JxHJizWLUJHWUM",
      },
    })
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.log("Errore nel fetch:", error))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const asin = props.asin

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
        fetchComments()
      })
      .catch((error) => console.log("Errore POST:", error))
  }

  const asin = props.asin

  return (
    <div>
      <h2>Commenti</h2>
      {asin ? (
        <>
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Scrivi un commento..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Invia
            </button>
          </form>
          <h4>Commenti esistenti:</h4>
          <ul className="list-group">
            {comments.length > 0 ? (
              comments.map((c, i) => (
                <li key={i} className="list-group-item">
                  {c.comment}
                </li>
              ))
            ) : (
              <li className="list-group-item">Nessun commento ancora.</li>
            )}
          </ul>
        </>
      ) : (
        <p>Seleziona un libro per vedere i commenti</p>
      )}
    </div>
  )
}

export default NewComment
