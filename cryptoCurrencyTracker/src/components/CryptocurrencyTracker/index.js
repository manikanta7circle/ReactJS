// Write your code here
// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, cryptoCurrenciesData: []}

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogoUrl: eachItem.currency_logo,
    }))
    this.setState({cryptoCurrenciesData: updatedData, isLoading: false})
  }

  renderCryptocurrencyPage = () => {
    const {cryptoCurrenciesData} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="Cryptocurrency Tracker"
          className="image"
        />
        <div className="currency-data-container">
          <CryptocurrenciesList cryptoCurrenciesData={cryptoCurrenciesData} />
        </div>
      </div>
    )
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        {isLoading ? this.renderLoader() : this.renderCryptocurrencyPage()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
