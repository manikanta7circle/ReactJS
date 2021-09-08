// Write your code here.
import {Component} from 'react'

import './index.css'

const blueCupImageUrl =
  'https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png'
const blueCupAltText = 'blue cup'

const whiteCupImageUrl =
  'https://assets.ccbp.in/frontend/react-js/coffee-planner-white-cup-img.png'
const whiteCupAltText = 'white cup'

class QuestionOption extends Component {
  updateOption = () => {
    const {optionData, questionType, updateSelectedOption} = this.props
    const {optionTitle} = optionData
    updateSelectedOption(questionType, optionTitle)
  }

  render() {
    const {optionData, optionSelected} = this.props
    const {optionTitle, description} = optionData
    const isOptionSelected = optionSelected === optionTitle
    const buttonClassName = isOptionSelected
      ? 'button button-selected'
      : 'button'
    const optionTitleClassName = isOptionSelected
      ? 'option-title option-title-selected'
      : 'option-title'
    const optionDescrClassName = isOptionSelected
      ? 'option-description option-selected-description'
      : 'option-description'
    return (
      <li className="option-container">
        <button
          className={buttonClassName}
          type="button"
          onClick={this.updateOption}
        >
          <div className="top-container">
            <h1 className={optionTitleClassName}>{optionTitle}</h1>
            {isOptionSelected ? (
              <img
                src={whiteCupImageUrl}
                alt={whiteCupAltText}
                className="cup-icon"
              />
            ) : (
              <img
                src={blueCupImageUrl}
                alt={blueCupAltText}
                className="cup-icon"
              />
            )}
          </div>
          <p className={optionDescrClassName}>{description}</p>
        </button>
      </li>
    )
  }
}

export default QuestionOption
