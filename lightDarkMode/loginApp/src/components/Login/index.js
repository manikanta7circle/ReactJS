// Write your code here
import './index.css'

const Login = props => {
  const {onClickButton} = props
  return (
    <button className="button" onClick={onClickButton} type="button">
      Login
    </button>
  )
}

export default Login
