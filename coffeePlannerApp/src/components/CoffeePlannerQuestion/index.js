// Write your code here.
import {Component} from 'react'

import QuestionOption from '../QuestionOption'

import './index.css'

class CoffeePlannerQuestion extends Component {
  render() {
    const {questionData, updateSelectedOption, getSelectedOption} = this.props
    const {questionTitle, optionsList, questionType} = questionData
    const optionSelected = getSelectedOption(questionType)
    return (
      <li className="question-container">
        <h1 className="question">{questionTitle} </h1>
        <ul className="options-container">
          {optionsList.map(eachOption => (
            <QuestionOption
              key={eachOption.id}
              optionData={eachOption}
              updateSelectedOption={updateSelectedOption}
              questionType={questionType}
              optionSelected={optionSelected}
            />
          ))}
        </ul>
      </li>
    )
  }
}

export default CoffeePlannerQuestion
