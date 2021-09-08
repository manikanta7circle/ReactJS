// Write your code here.
import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {isText: false}

  onPlus = () => {
    this.setState(prevState => ({isText: !prevState.isText}))
  }

  render() {
    const {isText} = this.state
    const {data} = this.props
    return (
      <div className="text-container">
        <div className="main-container">
          <h1 className="para">{data.questionText}</h1>
          {isText ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              onClick={this.onPlus}
              alt="minus"
              className="image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              onClick={this.onPlus}
              alt="plus"
              className="image"
            />
          )}
        </div>
        {isText && (
          <div className="hide-container">
            <p className="hidden-text">{data.answerText}</p>
          </div>
        )}
      </div>
    )
  }
}

export default FaqItem
