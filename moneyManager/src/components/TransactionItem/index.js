// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {title, amount, type, id} = transactionDetails

  const onClickDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li className="history-item">
      <p className="para">{title}</p>
      <p className="para">{amount}</p>
      <p className="para">{type}</p>
      <button
        className="icon-button"
        type="button"
        testid="delete"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
