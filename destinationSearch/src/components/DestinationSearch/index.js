// Write your code here
// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {initialDestinationsList} = this.props
    const searchResults = initialDestinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLocaleLowerCase()),
    )
    return (
      <div className="page-container">
        <div className="top-container">
          <h1 className="heading">Destination Search </h1>
          <div className="search-container">
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
              className="search-input"
              placeholder="Search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="image-icon"
            />
          </div>
        </div>
        <ul className="list-container">
          {searchResults.map(eachItem => (
            <DestinationItem data={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
