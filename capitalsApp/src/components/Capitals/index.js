import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {capital: countryAndCapitalsList[0].id}

  onSelect = event => {
    this.setState({
      capital: event.target.value,
    })
  }

  getFilteredCountry = () => {
    const {capital} = this.state
    const FilteredCountry = countryAndCapitalsList.filter(
      eachItem => eachItem.id === capital,
    )
    return FilteredCountry
  }

  render() {
    const {capital} = this.state
    const FilteredCountry = this.getFilteredCountry()
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading">Countries And Capitals</h1>
          <select onChange={this.onSelect} id="capital" value={capital}>
            {countryAndCapitalsList.map(eachItem => (
              <option value={eachItem.id} key={eachItem.id}>
                {eachItem.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="capital"> is capital of which country?</label>
          {FilteredCountry.map(eachItem => (
            <h1 className="country" key={eachItem.id}>
              {eachItem.country}
            </h1>
          ))}
        </div>
      </div>
    )
  }
}
export default Capitals
