import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const apiUrl = 'https://apis.ccbp.in/popular-repos?language='

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    popularReposData: [],
    activeFilterId: languageFiltersData[0].id,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getPopularRepos()
  }

  activeFilter = id => {
    this.setState({activeFilterId: id}, this.getPopularRepos)
  }

  getPopularRepos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {activeFilterId} = this.state

    const response = await fetch(`${apiUrl}${activeFilterId}`)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.popular_repos.map(repos => ({
        name: repos.name,
        id: repos.id,
        avatarUrl: repos.avatar_url,
        forksCount: repos.forks_count,
        issuesCount: repos.issues_count,
        starsCount: repos.stars_count,
      }))
      this.setState({
        popularReposData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 401) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderPopularReposList = () => {
    const {popularReposData} = this.state
    return (
      <ul className="popular-repos-item-container">
        {popularReposData.map(repos => (
          <RepositoryItem key={repos.id} repositoryData={repos} />
        ))}
      </ul>
    )
  }

  renderFailureView = () => (
    <div>
      <img
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        className="failure-image"
      />
      <h1 className="error-message">Something Went Wrong</h1>
    </div>
  )

  renderLoadingView = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderRepos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderPopularReposList()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {activeFilterId} = this.state
    return (
      <div className="main-container">
        <h1 className="main-heading">Popular</h1>
        <ul className="filters-container">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              key={eachItem.id}
              isActive={eachItem.id === activeFilterId}
              filterData={eachItem}
              activeFilter={this.activeFilter}
            />
          ))}
        </ul>
        <div className="popular-repos-list-container">{this.renderRepos()}</div>
      </div>
    )
  }
}

export default GithubPopularRepos
