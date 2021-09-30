import './index.css'

const FiltersGroup = props => {
  const renderCategoryOptions = () => {
    const {categoryOptions} = props
    return categoryOptions.map(eachItem => {
      const {categoryActiveOption} = props
      const onClickCategory = () => {
        categoryActiveOption(eachItem.categoryId)
      }
      return (
        <li key={eachItem.categoryId}>
          <button type="button" onClick={onClickCategory}>
            <p className="para">{eachItem.name}</p>
          </button>
        </li>
      )
    })
  }

  const renderRatingsList = () => {
    const {ratingsList} = props
    return ratingsList.map(eachItem => {
      const {ratingActiveOption} = props
      const onClickRating = () => ratingActiveOption(eachItem.ratingId)
      return (
        <li key={eachItem.ratingId}>
          <button type="button" onClick={onClickRating}>
            <img
              src={eachItem.imageUrl}
              alt={`rating-${eachItem.ratingId}`}
              className="rating-image"
            />
            & up
          </button>
        </li>
      )
    })
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-filter-container">
        <input
          type="search"
          value={searchInput}
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
      </div>
    )
  }

  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      <h1 className="category-heading">Category</h1>
      <ul className="list-container">{renderCategoryOptions()}</ul>
      <h1 className="ratings-heading">Ratings</h1>
      <ul className="list-container">{renderRatingsList()}</ul>
      <button type="button" className="clear-button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
