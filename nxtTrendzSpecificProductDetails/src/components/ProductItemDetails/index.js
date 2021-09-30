// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'

import Header from '../Header'
import SimilarProductItem from '../SimilarProductItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class ProductItemDetails extends Component {
  state = {
    productItemData: {},
    apiStatus: apiStatusConstants.initial,
    itemCount: 1,
  }

  componentDidMount() {
    this.getProductDetails()
  }

  getProductDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/products/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = {
        title: fetchedData.title,
        availability: fetchedData.availability,
        brand: fetchedData.brand,
        description: fetchedData.description,
        id: fetchedData.id,
        imageUrl: fetchedData.image_url,
        price: fetchedData.price,
        rating: fetchedData.rating,
        similarProducts: fetchedData.similar_products,
        totalReviews: fetchedData.total_reviews,
      }
      this.setState({
        productItemData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onIncrement = () => {
    this.setState(prevState => ({itemCount: prevState.itemCount + 1}))
  }

  onDecrement = () => {
    const {itemCount} = this.state
    if (itemCount > 1) {
      this.setState(prevState => ({itemCount: prevState.itemCount - 1}))
    }
  }

  onContinueShopping = () => {
    const {history} = this.props
    history.replace('/products')
  }

  renderProductDetails = () => {
    const {productItemData, itemCount} = this.state
    return (
      <div className="product-item-details-main-container">
        <div className="product-details-container-top">
          <img
            src={productItemData.imageUrl}
            alt="product"
            className="product-image"
          />
          <div className="product-item-details">
            <h1 className="product-name">{productItemData.title}</h1>
            <p className="product-price">{productItemData.price}</p>
            <div className="rating-review">
              <p className="product-rating">{productItemData.rating}</p>
              <p className="product-review"> {productItemData.totalReviews}</p>
            </div>
            <p className="product-description">{productItemData.description}</p>
            <p className="product-availability">
              Availability: {productItemData.availability}
            </p>
            <p className="product-item-brand">
              Product: {productItemData.brand}
            </p>
            <hr />
            <div className="product-item-buy-container">
              <div className="product-item-co unt-container">
                <button
                  testid="plus"
                  className="count-button"
                  type="button"
                  onClick={this.onIncrement}
                >
                  <BsPlusSquare className="count-icon" />
                </button>
                <p className="item-count">{itemCount}</p>
                <button
                  testid="minus"
                  className="count-button"
                  type="button"
                  onClick={this.onDecrement}
                >
                  <BsDashSquare className="count-icon" />
                </button>
              </div>
              <button className="buy-button" type="button">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <h1 className="product-item-similar-products-heading">
          <SimilarProductItem
            similarProductsData={productItemData.similarProducts}
          />
        </h1>
        <div className="product-item-details-similar-product-items-container">
          hi
        </div>
      </div>
    )
  }

  renderLoadingView = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="error view"
      />
      <h1> Product Not Found</h1>
      <button type="button" onClick={this.onContinueShopping}>
        Continue Shopping
      </button>
    </div>
  )

  renderProductItemDetails() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductDetails()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="product-details-main-container">
          {this.renderProductItemDetails()}
        </div>
      </>
    )
  }
}

export default ProductItemDetails
