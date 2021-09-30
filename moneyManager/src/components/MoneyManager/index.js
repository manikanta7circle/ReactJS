import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    typeInput: 'INCOME',
    totalBalance: 0,
    totalIncome: 0,
    totalExpenses: 0,
  }

  onAdd = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeInput} = this.state
    if (titleInput !== '' && amountInput !== '') {
      const newTransaction = {
        id: uuidv4(),
        title: titleInput,
        amount: amountInput,
        type: typeInput,
      }
      if (typeInput === 'INCOME') {
        this.setState(prevState => ({
          totalIncome: prevState.totalIncome + parseInt(amountInput),
          totalBalance: prevState.totalBalance + parseInt(amountInput),
        }))
      }
      if (typeInput === 'EXPENSES') {
        this.setState(prevState => ({
          totalExpenses: prevState.totalExpenses + parseInt(amountInput),
          totalBalance: prevState.totalBalance - parseInt(amountInput),
        }))
      }
      this.setState(prevState => ({
        transactionList: [...prevState.transactionList, newTransaction],
        titleInput: '',
        amountInput: '',
      }))
    }
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTypeInput = event => {
    this.setState({typeInput: event.target.value})
  }

  onDelete = id => {
    const {transactionList} = this.state
    const delTrans = transactionList.filter(each => each.id === id)
    console.log(delTrans[0].type)
    if (delTrans[0].type === 'INCOME') {
      this.setState(prevState => ({
        totalIncome: prevState.totalIncome - parseInt(delTrans[0].amount),
        totalBalance: prevState.totalBalance - parseInt(delTrans[0].amount),
      }))
    }
    if (delTrans[0].type === 'EXPENSES') {
      this.setState(prevState => ({
        totalExpenses: prevState.totalExpenses - parseInt(delTrans[0].amount),
        totalBalance: prevState.totalBalance + parseInt(delTrans[0].amount),
      }))
    }
    this.setState(prevState => ({
      transactionList: prevState.transactionList.filter(each => each.id !== id),
    }))
  }

  render() {
    const {
      titleInput,
      amountInput,
      typeInput,
      totalBalance,
      totalIncome,
      totalExpenses,
      transactionList,
    } = this.state
    return (
      <div className="main-container">
        <div className="top-container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="description">
            Welcome back to your <span className="m">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          Balance={totalBalance}
          Income={totalIncome}
          Expenses={totalExpenses}
        />
        <div className="bottom-container">
          <div className="transaction-container">
            <h1 className="transaction-heading">Add Transaction</h1>
            <form className="transaction-from-container" onSubmit={this.onAdd}>
              <div className="title-input-container">
                <label htmlFor="title-input" className="label-text">
                  TITLE
                </label>
                <input
                  type="text"
                  placeholder="TITLE"
                  className="input"
                  value={titleInput}
                  id="title-input"
                  onChange={this.onChangeTitleInput}
                />
              </div>
              <div className="amount-input-container">
                <label htmlFor="amount-input" className="label-text">
                  AMOUNT
                </label>
                <input
                  type="text"
                  placeholder="AMOUNT"
                  id="amount-input"
                  value={amountInput}
                  className="input"
                  onChange={this.onChangeAmountInput}
                />
              </div>
              <div className="type-input-container">
                <label htmlFor="type-input" className="label-text">
                  TYPE
                </label>
                <select
                  id="type-input"
                  value={typeInput}
                  onChange={this.onChangeTypeInput}
                >
                  {transactionTypeOptions.map(each => (
                    <option key={uuidv4()} value={each.optionId}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
          <div className="transaction-history-container">
            <h1 className="history-heading">History</h1>
            <ul className="history-list-container">
              <li className="history-item">
                <p className="title-para"> Title</p>
                <p className="title-para"> Amount</p>
                <p className="title-para"> Type</p>
              </li>
              {transactionList.map(each => (
                <TransactionItem
                  key={each.id}
                  transactionDetails={each}
                  deleteTransaction={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
