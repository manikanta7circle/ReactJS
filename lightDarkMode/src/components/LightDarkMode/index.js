// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {cardColor: 'card1', text: 'Light Mode', head: 'head1'}

  mode = () => {
    const {cardColor, text, head} = this.state
    if (text === 'Light Mode') {
      this.setState({text: 'Dark Mode'})
      this.setState({cardColor: 'card2'})
      this.setState({head: 'head2'})
    } else {
      this.setState({text: 'Light Mode'})
      this.setState({cardColor: 'card1'})
      this.setState({head: 'head1'})
    }
  }

  render() {
    const {cardColor, text, head} = this.state
    return (
      <div className="bg-container">
        <div className={`card ${cardColor}`}>
          <h1 className={`heading ${head}`}> Click To Change Mode</h1>
          <div className="b">
            <button className="button" type="button" onClick={this.mode}>
              {text}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
