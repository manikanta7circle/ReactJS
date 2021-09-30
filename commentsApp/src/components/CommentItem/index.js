// Write your code here

const CommentItem = props => {
  const {commentDetails, toggleIsLike, onDelete} = props
  const {name, comment, isLike, id, postedTime} = commentDetails

  const onClickLike = () => {
    toggleIsLike(id)
  }

  const onClickDelete = () => {
    onDelete(id)
  }

  const likeImgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="feedback-item">
      <div className="comment-container">
        <div className="icon">
          <h1>{name[0]}</h1>
        </div>
        <div className="comment-item">
          <div className="top">
            <h1 className="commenter-name">{name}</h1>
            <p className="time">{postedTime}</p>
          </div>
          <p className="comme">{comment}</p>
        </div>
      </div>
      <div className="icon-container">
        <img src={likeImgUrl} className="icon-image" alt="like" />
        <button type="button" className="like-button" onClick={onClickLike}>
          Like
        </button>

        <button type="button" testid="delete" onClick={onClickDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
