// Write your JS code here
import {Component} from 'react'
import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {cryptoCurrencyData} = this.props
    const {
      currencyName,
      currencyLogoUrl,
      usdValue,
      euroValue,
    } = cryptoCurrencyData
    return (
      <li className="currency-item">
        <div className="currency">
          <img
            src={currencyLogoUrl}
            alt={currencyName}
            className="currency-logo"
          />
          <p className="currency-name"> {currencyName}</p>
        </div>
        <div className="currency-value-container">
          <p className="value">{usdValue}</p>
          <p className="value">{euroValue}</p>
        </div>
      </li>
    )
  }
}
export default CryptocurrencyItem
