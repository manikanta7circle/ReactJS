// Write your code here.
import {Component} from 'react'

import './index.css'

class WinOrLoseCard extends Component {
  render() {
    const {isWin, score, onClickPlayAgain} = this.props
    const imageUrl = isWin
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    const playerStatus = isWin ? 'You Won' : 'You Lose'
    const scoreStatus = isWin ? 'Best Score' : 'Score'
    return (
      <div className="score-card">
        <div className="sore-and-status-section">
          <h1 className="player-status">{playerStatus}</h1>
          <p className="score-status">{scoreStatus}</p>
          <p className="score">{`${score}/12`}</p>
          <div className="button-section">
            <button
              type="button"
              className="play-again-button"
              onClick={onClickPlayAgain}
            >
              Play Again
            </button>
          </div>
        </div>
        <div className="image-section">
          <img src={imageUrl} alt="win or lose" className="result-image" />
        </div>
      </div>
    )
  }
}
export default WinOrLoseCard
