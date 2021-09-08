// Write your code here.
import {Component} from 'react'

import CoffeePlannerQuestion from '../CoffeePlannerQuestion'

import './index.css'

class CoffeePlanner extends Component {
  state = {
    selectedPlanOptions: {
      DRINK_TYPE: '',
      COFFEE_TYPE: '',
      QUANTITY: '',
      GRIND_TYPE: '',
      DELIVER_TYPE: '',
    },
    showSummary: false,
  }

  getSelectedOption = questionType => {
    const {selectedPlanOptions} = this.state

    return selectedPlanOptions[questionType]
  }

  updateSelectedOption = (questionType, optionTitle) => {
    const {selectedPlanOptions} = this.state
    const newSelectedPlanOptions = {...selectedPlanOptions}
    newSelectedPlanOptions[questionType] = optionTitle

    this.setState({selectedPlanOptions: newSelectedPlanOptions})
    this.setState({showSummary: false})
  }

  isAllOptionsSelected = () => {
    const {selectedPlanOptions} = this.state

    if (
      selectedPlanOptions.DRINK_TYPE !== '' &&
      selectedPlanOptions.COFFEE_TYPE !== '' &&
      selectedPlanOptions.QUANTITY !== '' &&
      selectedPlanOptions.GRIND_TYPE !== '' &&
      selectedPlanOptions.DELIVER_TYPE !== ''
    ) {
      return true
    }
    return false
  }

  getSummary = () => {
    const {selectedPlanOptions, showSummary} = this.state
    if (showSummary) {
      return (
        <div className="summary-container">
          {this.isAllOptionsSelected() ? (
            <p className="summary">
              I Drink my coffee as
              <span className="selected-value">
                {` ${selectedPlanOptions.DRINK_TYPE}`}
              </span>
              , with a
              <span className="selected-value">
                {` ${selectedPlanOptions.COFFEE_TYPE} `}
              </span>
              type of bean.
              <span className="selected-value">
                {` ${selectedPlanOptions.QUANTITY} `}
              </span>
              of
              <span className="selected-value">
                {` ${selectedPlanOptions.GRIND_TYPE} `}
              </span>
              ground, send to me
              <span className="selected-value">
                {` ${selectedPlanOptions.DELIVER_TYPE}`}
              </span>
              .
            </p>
          ) : (
            <p className="summary">
              Kindly select options for all the questions.
            </p>
          )}
        </div>
      )
    }
    return null
  }

  onCreateMyPlan = () => {
    this.setState({
      showSummary: true,
    })
  }

  render() {
    const {coffeePlannerList} = this.props
    return (
      <div className="page-container">
        <div className="bg-container">
          <div className="top-text-container">
            <h1 className="heading"> Create a Plan</h1>
            <p className="description">
              We offer an assortment of the best artesian coffees from the globe
              delivered fresh to the door create your plan with this
            </p>
          </div>
        </div>
        <div className="main-container">
          <ul className="questions-container">
            {coffeePlannerList.map(eachQuestion => (
              <CoffeePlannerQuestion
                key={eachQuestion.id}
                questionData={eachQuestion}
                updateSelectedOption={this.updateSelectedOption}
                getSelectedOption={this.getSelectedOption}
              />
            ))}
          </ul>
          <div className="bottom-container">
            <button
              className="create-button"
              type="button"
              onClick={this.onCreateMyPlan}
            >
              Create my plan
            </button>
            {this.getSummary()}
          </div>
        </div>
      </div>
    )
  }
}

export default CoffeePlanner
