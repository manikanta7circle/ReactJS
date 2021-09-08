// Write your JS code here
// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptoCurrenciesData} = this.props
    return (
      <div className="currency-table">
        <div className="top-card">
          <p className="label"> Coin Type</p>
          <div className="type-container">
            <p className="label"> USD </p>
            <p className="label"> EURO</p>
          </div>
        </div>
        <ul className="currency-list-container">
          {cryptoCurrenciesData.map(eachItem => (
            <CryptocurrencyItem
              key={eachItem.id}
              cryptoCurrencyData={eachItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default CryptocurrenciesList
