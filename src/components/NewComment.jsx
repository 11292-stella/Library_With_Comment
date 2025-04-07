import React, { Component } from "react"
import AddComment from "./AddComment" // Assumiamo che questo componente sia già definito
import CommentsList from "./CommentList" // Assumiamo che questo componente sia già definito

const URL = "https://striveschool-api.herokuapp.com/api/comments/"

class NewComment extends Component {
  state = {
    comments: [], // Stato per i commenti
    newComment: {
      // Stato per il commento che l'utente vuole inviare
      comment: "",
      rate: "3",
      elementId: this.props.asin,
    },
  }

  // Funzione per caricare i commenti dal server
  fetchComments = () => {
    const { asin } = this.props
    if (!asin) return // Se non c'è un asin, non fare nulla

    fetch(URL + asin, {
      headers: {
        Authorization: "Bearer <TOKEN>", // Inserisci il tuo token qui
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ comments: data }) // Aggiorna lo stato con i commenti
      })
      .catch((error) => console.log("Errore:", error))
  }

  // Quando l'asin cambia, carica i nuovi commenti
  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments()
    }
  }

  // Carica i commenti iniziali quando il componente viene montato
  componentDidMount() {
    this.fetchComments()
  }

  // Funzione per gestire l'invio di un nuovo commento
  handleCommentChange = (e) => {
    this.setState({
      newComment: {
        ...this.state.newComment,
        [e.target.name]: e.target.value,
      },
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { newComment } = this.state

    // Invio del nuovo commento
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer <TOKEN>", // Inserisci il tuo token qui
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Commento inviato con successo!")
          this.setState({
            newComment: { comment: "", rate: "3", elementId: this.props.asin }, // Reset del form
          })
          this.fetchComments() // Ricarica i commenti
        } else {
          throw new Error("Errore nell'invio del commento")
        }
      })
      .catch((error) => console.error("Errore:", error))
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
              <div>
                <label htmlFor="comment">Scrivi un commento:</label>
                <textarea
                  id="comment"
                  name="comment"
                  value={newComment.comment}
                  onChange={this.handleCommentChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="rate">Voto:</label>
                <select
                  id="rate"
                  name="rate"
                  value={newComment.rate}
                  onChange={this.handleCommentChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <button type="submit">Invia Commento</button>
            </form>

            {/* Mostra la lista dei commenti */}
            <CommentsList comments={comments} />
          </>
        ) : (
          <p>Seleziona un libro per vedere i commenti</p>
        )}
      </div>
    )
  }
}

export default NewComment
