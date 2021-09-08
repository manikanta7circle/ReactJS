// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {totalBalance: 2000}

  onChangeBalance = value => {
    this.setState(prevState => ({totalBalance: prevState.totalBalance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {totalBalance} = this.state
    return (
      <div className="main-container">
        <div className="content-container">
          <div className="profile">
            <p className="profile-icon"> S </p>
            <p className="profile-name">Sarah Williams</p>
          </div>
          <div className="balance-content">
            <p className="your-balance"> Your Balance</p>
            <div className="balance-container">
              <h1 className="balance">{totalBalance}</h1>
              <p className="in-rupees"> In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <h1 className="withdraw">Withdraw</h1>
            <p className="description"> CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="list-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                data={eachItem}
                key={eachItem.id}
                onChangeBalance={this.onChangeBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
