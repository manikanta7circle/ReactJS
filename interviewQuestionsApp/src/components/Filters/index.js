// Write you Code here
import {Component} from 'react'

import './index.css'

class Filters extends Component {
  onSelectCategory = event => {
    const {getSelectedLanguage} = this.props
    const selectedCategory = event.target.value
    getSelectedLanguage(selectedCategory)
  }

  onSelectLevel = event => {
    const {getSelectedLevel} = this.props
    const selectedLevel = event.target.value
    getSelectedLevel(selectedLevel)
  }

  render() {
    const {levelsData, categoryData} = this.props
    const {level} = levelsData
    const {language} = categoryData
    return (
      <div className="filters-container-section">
        <div className="filter-container">
          <label htmlFor="language" className="label-text">
            LANGUAGE
          </label>
          <select
            id="language"
            value={language}
            className="select-input"
            onChange={this.onSelectCategory}
          >
            {categoryData.map(eachItem => (
              <option
                value={eachItem.language}
                key={eachItem.id}
                className="option-input"
              >
                {eachItem.language}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-container">
          <label htmlFor="level" className="label-text">
            DIFFICULTY LEVEL
          </label>
          <select
            id="level"
            value={level}
            className="select-input"
            onChange={this.onSelectLevel}
          >
            {levelsData.map(eachItem => (
              <option
                value={eachItem.level}
                key={eachItem.id}
                className="option-input"
              >
                {eachItem.level}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }
}
export default Filters
