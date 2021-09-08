// Write your code here.
import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  renderScores = () => {
    const {currentScore, isGameOver, topScore} = this.props
    if (isGameOver) {
      return null
    }
    return (
      <div className="score-container">
        <p className="nav-score">Score: {currentScore}</p>
        <p className="nav-score">Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="nav-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="logo"
            className="logo"
          />
          <h1 className="game-name"> Emoji Game</h1>
        </div>
        {this.renderScores()}
      </div>
    )
  }
}

export default NavBar
