import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
    count: 0,
  }

  toggleIsLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachFeedback => {
        if (id === eachFeedback.id) {
          return {...eachFeedback, isLike: !eachFeedback.isLike}
        }
        return eachFeedback
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment, commentsList} = this.state
    if (name !== '' && comment !== '') {
      const newComment = {
        id: uuidv4(),
        name,
        comment,
        isLike: false,
        postedTime: formatDistanceToNow(new Date()),
      }
      this.setState(prevState => ({
        commentsList: [...prevState.commentsList, newComment],
        count: prevState.count + 1,
        name: '',
        comment: '',
      }))
    }
    console.log(commentsList)
  }

  onDelete = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(each => each.id !== id),
      count: prevState.count - 1,
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, comment, count, commentsList} = this.state
    return (
      <div className="main-conainer">
        <h1 className="main-heading">Comments</h1>
        <div className="feedback-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="main-image"
            alt="comments"
          />
          <div className="form-container">
            <p className="para">Say something about 4.0 Technologies</p>
            <form
              className="feedback-form-container"
              onSubmit={this.onAddComment}
            >
              <input
                type="textarea"
                value={name}
                className="input"
                placeholder="Your Name"
                onChange={this.onChangeName}
              />
              <textarea
                rows="5"
                cols="40"
                value={comment}
                placeholder="Your Comment"
                onChange={this.onChangeComment}
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
            <div className="feedback-comments">
              <p className="head">
                <span>{count}</span>
                Comments
              </p>
              <ul className="comments-container">
                {commentsList.map(eachFeedback => (
                  <CommentItem
                    key={eachFeedback.id}
                    commentDetails={eachFeedback}
                    toggleIsLike={this.toggleIsLike}
                    onDelete={this.onDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
