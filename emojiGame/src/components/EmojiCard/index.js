// Write your code here.
import {Component} from 'react'

import './index.css'

class EmojiCard extends Component {
  onClickEmoji = () => {
    const {onEmojiSelected, emojiDetails} = this.props
    const {id} = emojiDetails
    onEmojiSelected(id)
  }

  render() {
    const {emojiDetails} = this.props
    const {emojiName, emojiUrl} = emojiDetails
    return (
      <li className="emoji" onClick={this.onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </li>
    )
  }
}
export default EmojiCard
