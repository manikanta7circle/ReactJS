// Write your code here
const SimilarProductItem = props => {
  const {similarProductsData} = props

  return (
    <ul className="similar-products-container">
      {similarProductsData.map(eachItem => (
        <li className="product-item" key={eachItem.id}>
          <img
            src={eachItem.image_url}
            alt={`similar product ${eachItem.title}`}
            className="thumbnail"
          />
          <p className="title">{eachItem.title}</p>
          <p className="brand">by {eachItem.brand}</p>
          <div className="product-details">
            <p className="price">Rs {eachItem.price}/-</p>
            <div className="rating-container">
              <p className="rating">{eachItem.rating}</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                alt="star"
                className="star"
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default SimilarProductItem
