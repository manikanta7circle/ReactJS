// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {lettersCount: 0}

  onSearchInput = event => {
    const searchInput = event.target.value
    this.setState({
      lettersCount: searchInput.length,
    })
  }

  render() {
    const {lettersCount} = this.state
    return (
      <div className="bg-container">
        <div className="main-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="watch"
            className="watch-image"
          />
          <div className="content-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label htmlFor="searchInput" className="para">
                Enter the phrase
              </label>
              <input
                type="seach"
                className="search-input"
                onChange={this.onSearchInput}
                placeholder="Enter the phrase"
                id="searchInput"
              />
            </div>
            <div className="result-container">
              <h1 className="result">{`No.of letters: ${lettersCount}`}</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
