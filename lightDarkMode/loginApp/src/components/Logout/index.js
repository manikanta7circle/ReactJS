// Write your code here
import './index.css'

const Logout = props => {
  const {onClickButton} = props
  return (
    <button className="button" onClick={onClickButton} type="button">
      Logout
    </button>
  )
}

export default Logout
