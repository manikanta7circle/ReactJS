/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import './index.css'

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {clickedEmojis: [], isGameOver: false, topScore: 0}

  setTopScore = cScore => {
    const {topScore} = this.state
    if (cScore > topScore) {
      this.setState({topScore: cScore})
    }
  }

  onEmojiSelected = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isEmojiPresent = clickedEmojis.includes(id)
    const clickedEmojisLength = clickedEmojis.length
    if (isEmojiPresent) {
      this.setState({isGameOver: true})
      this.setTopScore(clickedEmojisLength)
    } else {
      if (clickedEmojisLength === emojisList.length - 1) {
        this.setState({isGameOver: true})
        this.setTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojis = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    return (
      <ul className="emojis-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            emojiDetails={eachEmoji}
            key={eachEmoji.id}
            onEmojiSelected={this.onEmojiSelected}
          />
        ))}
      </ul>
    )
  }

  resetGame = () => {
    this.setState({isGameOver: false, clickedEmojis: []})
  }

  renderWinOrLose = () => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isWin = emojisList.length === clickedEmojis.length
    return (
      <WinOrLoseCard
        isWin={isWin}
        score={clickedEmojis.length}
        onClickPlayAgain={this.resetGame}
      />
    )
  }

  render() {
    const {isGameOver, clickedEmojis, topScore} = this.state
    return (
      <div className="page-container">
        <NavBar
          currentScore={clickedEmojis.length}
          topScore={topScore}
          isGameOver={isGameOver}
        />
        <div className="main-section">
          {isGameOver ? this.renderWinOrLose() : this.renderEmojis()}
        </div>
        <div className="Note-container">
          {isGameOver ? null : (
            <p className="Note">
              Note : To get high score tap on unique emojis
            </p>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
