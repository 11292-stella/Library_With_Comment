import { ListGroup } from "react-bootstrap"
import SingleComment from "./SingleComment"

const CommentsList = function (props) {
  return (
    <ListGroup>
      {props.comment.map((recensione) => {
        return <SingleComment recensione={recensione} key={recensione._id} />
      })}
    </ListGroup>
  )
}

export default CommentsList
