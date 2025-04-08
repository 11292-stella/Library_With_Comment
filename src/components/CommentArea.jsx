import { useState, useEffect } from "react"

import CommentsList from "./CommentList"
import AddComment from "./AddComment"
const URL = "https://striveschool-api.herokuapp.com/api/comments/"

const CommentArea = function (props) {
  //state = {
  // comment: [],
  //}

  const [comment, setComment] = useState([])

  const recComment = () => {
    if (!props.asin) {
      console.log("ASIN non definito, fetch annullata")
      return
    }

    fetch(URL + props.asin, {
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
        setComment(data)
      })
      .catch((err) => {
        console.log("errore", err)
      })
  }

  //componentDidMount() {
  // this.recComment()
  //}

  //componentDidUpdate(prevProps) {
  //  if (this.props.asin !== prevProps.asin) {
  //   this.recComment()
  // }
  //}

  useEffect(() => {
    recComment()
  }, [props.asin])

  return (
    <div>
      <h2>COMMENTAREA</h2>

      <CommentsList comment={comment} />
      <AddComment asin={props.asin} />
    </div>
  )
}

export default CommentArea
