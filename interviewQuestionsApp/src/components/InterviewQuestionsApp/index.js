// Write you Code here
import {Component} from 'react'

import Filters from '../Filters'

import InterviewQuestion from '../InterviewQuestion'

import './index.css'

let filteredQuestion
class InterviewQuestionsApp extends Component {
  state = {languageSelected: 'ALL', levelSelected: 'ALL'}

  getSelectedLanguage = selectedCategory => {
    this.setState({
      languageSelected: selectedCategory,
    })
  }

  getSelectedLevel = selectedLevel => {
    this.setState({
      levelSelected: selectedLevel,
    })
  }

  getFilteredQuestion = () => {
    const {languageSelected, levelSelected} = this.state
    const {questionsData} = this.props

    if (languageSelected === 'ALL' && levelSelected === 'ALL') {
      filteredQuestion = questionsData
    } else if (languageSelected === 'ALL' && levelSelected !== 'ALL') {
      filteredQuestion = questionsData.filter(
        eachQuestion => eachQuestion.difficultyLevel === levelSelected,
      )
    } else if (languageSelected !== 'ALL' && levelSelected === 'ALL') {
      filteredQuestion = questionsData.filter(
        eachQuestion => eachQuestion.language === languageSelected,
      )
    } else {
      filteredQuestion = questionsData.filter(
        eachQuestion =>
          eachQuestion.language === languageSelected &&
          eachQuestion.difficultyLevel === levelSelected,
      )
    }
    return filteredQuestion
  }

  render() {
    const {levelsData, categoryData} = this.props
    const filteredQuestions = this.getFilteredQuestion()
    return (
      <div className="page-container">
        <div className="bg-container">
          <div className="top-container">
            <h1 className="heading">30 Seconds of Interviews</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/interview-questions-img.png"
              alt="interview"
              className="bg-image"
            />
          </div>
        </div>
        <div className="main-container">
          <Filters
            levelsData={levelsData}
            categoryData={categoryData}
            getSelectedLevel={this.getSelectedLevel}
            getSelectedLanguage={this.getSelectedLanguage}
          />
        </div>
        <div className="main-section">
          {filteredQuestions.map(eachQuestion => (
            <InterviewQuestion
              key={eachQuestion.id}
              questionsData={eachQuestion}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default InterviewQuestionsApp
