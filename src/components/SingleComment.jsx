import { ListGroupItem, Button } from "react-bootstrap"

const URL = "https://striveschool-api.herokuapp.com/api/comments/"

const SingleComment = function (props) {
  const deleteComment = () => {
    fetch(URL + props.recensione._id, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMjcwMzM4MzRiZjAwMTUwMDA3MDAiLCJpYXQiOjE3NDM2ODQ3MzYsImV4cCI6MTc0NDg5NDMzNn0.qS52rTci0AyAlbwFKzIjMXL4LY5O0JxHJizWLUJHWUM",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Recensione eliminata!")
        } else {
          throw new Error("Errore nella cancellazione")
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <ListGroupItem className="d-flex justify-content-between">
      <div className="d-flex flex-wrap align-content-center">
        {props.recensione.comment} | {props.recensione.rate}/5
      </div>
      <Button variant="danger" onClick={deleteComment}>
        <i className="bi bi-trash-fill"></i>
      </Button>
    </ListGroupItem>
  )
}

export default SingleComment
