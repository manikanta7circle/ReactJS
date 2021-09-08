// Write your code here
import './index.css'

const DenominationItem = props => {
  const {data, onChangeBalance} = props
  const {value} = data
  const changeBalance = () => {
    onChangeBalance(value)
  }

  return (
    <li className="list-item">
      <button type="button" className="button" onClick={changeBalance}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
