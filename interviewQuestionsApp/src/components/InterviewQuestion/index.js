// Write you Code here
import {Component} from 'react'

import './index.css'

class InterviewQuestion extends Component {
  state = {isHidden: true}

  onShowOrHide = () => {
    this.setState(prevState => ({
      isHidden: !prevState.isHidden,
    }))
  }

  render() {
    const {questionsData} = this.props
    const {language, difficultyLevel, questionText, answerText} = questionsData
    const {isHidden} = this.state
    return (
      <div className="question-container">
        <div className="type-container">
          <span className={language}>{language}</span>
          <span className={difficultyLevel}>{difficultyLevel}</span>
        </div>
        <h1 className="question">{questionText}</h1>
        <button type="button" className="button" onClick={this.onShowOrHide}>
          <p className="button-text">{isHidden ? 'Show' : 'Hide'}</p>
          {isHidden ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/down-arrow.png"
              alt="down arrow"
              className="button-icon"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/up-arrow.png"
              alt="up arrow"
              className="button-icon"
            />
          )}
        </button>
        {isHidden ? null : <p className="answer">{answerText}</p>}
      </div>
    )
  }
}

export default InterviewQuestion
