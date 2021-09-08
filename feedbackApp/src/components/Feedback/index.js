// Write your React code here.
// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {feedback: false}

  onFeedback = () => {
    this.setState({feedback: true})
  }

  getFeedbackFrom = () => {
    const {feedbackData} = this.props
    return (
      <div className="main-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="list-container">
          {feedbackData.emojis.map(eachItem => (
            <li className="list-item" key={eachItem.id}>
              <img
                src={eachItem.imageUrl}
                alt="emoji"
                className="emoji-image"
                onClick={this.onFeedback}
              />
              <p className="para">{eachItem.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  getThankYou = () => {
    const {feedbackData} = this.props
    return (
      <div className="main-container">
        <img src={feedbackData.loveEmojiUrl} alt="loveEmoji" />
        <h1 className="thank">Thank you!</h1>
        <p className="p">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  renderMainContainer = () => {
    const {feedback} = this.state
    let result = this.getFeedbackFrom()
    if (feedback === true) {
      result = this.getThankYou()
      return result
    }
    return result
  }

  render() {
    return <div className="bg-container">{this.renderMainContainer()}</div>
  }
}

export default Feedback
