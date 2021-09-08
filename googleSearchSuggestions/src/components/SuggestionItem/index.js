// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {data, onFillIcon} = props
  const {suggestion} = data
  const onFill = () => {
    onFillIcon(suggestion)
  }

  return (
    <li className="list-item">
      <div className="suggestion-container">
        <p className="suggestion">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          onClick={onFill}
          className="icon"
        />
      </div>
    </li>
  )
}

export default SuggestionItem
