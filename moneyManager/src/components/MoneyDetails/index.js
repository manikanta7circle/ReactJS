// Write your code here
import {Component} from 'react'

import './index.css'

class MoneyDetails extends Component {
  render() {
    const {Balance, Income, Expenses} = this.props
    return (
      <ul className="money-details-container">
        <li className="card bg-card1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="image"
          />
          <div className="card-details">
            <p className="title">Your Balance</p>
            <p className="amount" testid="balanceAmount">
              Rs {Balance}
            </p>
          </div>
        </li>
        <li className="card bg-card2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="image"
          />
          <div className="card-details">
            <p className="title">Your Income</p>
            <p className="amount" testid="incomeAmount">
              Rs {Income}
            </p>
          </div>
        </li>
        <li className="card bg-card3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="image"
          />
          <div className="card-details">
            <p className="title">Your Expenses</p>
            <p className="amount" testid="expensesAmount">
              Rs {Expenses}
            </p>
          </div>
        </li>
      </ul>
    )
  }
}
export default MoneyDetails
