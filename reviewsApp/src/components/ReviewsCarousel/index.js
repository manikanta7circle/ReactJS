// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onLeft = () => {
    const {reviewsData} = this.props
    const len = reviewsData.length
    const {index} = this.state
    console.log(index)
    if (index > 0 && index < len) {
      this.setState(prevState => ({index: prevState.index - 1}))
      console.log(index)
    }
  }

  onRight = () => {
    const {reviewsData} = this.props
    const len = reviewsData.length
    const {index} = this.state
    if (index >= 0 && index < len - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {reviewsData} = this.props
    const {index} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="main-container">
          <div className="image-container">
            <button testid="leftArrow" className="button" onClick={this.onLeft}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="control"
              />
            </button>
          </div>
          <div className="text-container">
            <img
              src={reviewsData[index].imgUrl}
              alt={`${reviewsData[index].username}-avatar`}
            />
            <p> {reviewsData[index].username} </p>
            <p> {reviewsData[index].companyName}</p>
            <p> {reviewsData[index].description}</p>
          </div>
          <div className="image-container">
            <button
              testid="rightArrow"
              className="button"
              onClick={this.onRight}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="control"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
