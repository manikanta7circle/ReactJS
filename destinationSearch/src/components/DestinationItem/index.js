// Write your code here
import './index.css'

const DestinationItem = props => {
  const {data} = props
  const {name, imgUrl} = data
  return (
    <li className="list-item">
      <div className="desti">
        <img src={imgUrl} alt="city" className="desti-image" />
        <h1 className="img-name">{name}</h1>
      </div>
    </li>
  )
}

export default DestinationItem
