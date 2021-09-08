// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    Total: 0,
    Heads: 0,
    Tails: 0,
  }

  onToss = () => {
    const randomNumber = Math.floor(Math.random() * 2)
    console.log(randomNumber)
    this.setState(prevState => ({
      Total: prevState.Total + 1,
    }))
    if (randomNumber === 0) {
      this.setState({
        image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
      this.setState(prevState => ({
        Heads: prevState.Heads + 1,
      }))
    } else {
      this.setState({
        image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
      this.setState(prevState => ({
        Tails: prevState.Tails + 1,
      }))
    }
  }

  render() {
    const {image, Total, Heads, Tails} = this.state
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={image} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.onToss}>
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">{`Total: ${Total}`}</p>
            <p className="result">{`Heads: ${Heads}`}</p>
            <p className="result">{`Tails: ${Tails}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
