import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'

import Loader from 'react-loader-spinner'

import Header from '../Header'
import FiltersGroup from '../FiltersGroup'
import JobCard from '../JobCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const profileApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

const jobsApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
  noJobs: 'NOJOBS',
}

class Jobs extends Component {
  state = {
    profileDetails: {},
    jobsDetails: [],
    profileApiStatus: profileApiStatusConstants.initial,
    jobsApiStatus: jobsApiStatusConstants.initial,
    minimumPackage: '',
    employmentTypeOptions: [],
    searchInput: '',
  }

  componentDidMount() {
    this.getProfileDetails()
    this.getJobs()
  }

  salaryRangeChange = salaryRangeId => {
    this.setState({minimumPackage: salaryRangeId}, this.getJobs)
  }

  employmentTypeChange = employmentTypeId => {
    this.setState(
      prevState => ({
        employmentTypeOptions: [
          ...prevState.employmentTypeOptions,
          employmentTypeId,
        ],
      }),
      this.getJobs,
    )
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => this.getJobs()

  getJobs = async () => {
    const {minimumPackage, employmentTypeOptions, searchInput} = this.state
    const employmentQuery = employmentTypeOptions.join(',')
    this.setState({jobsApiStatus: jobsApiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const jobsApiUrl = `https://apis.ccbp.in/jobs?employment_type=${employmentQuery}&minimum_package=${minimumPackage}&search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const jobsResponse = await fetch(jobsApiUrl, options)
    if (jobsResponse.ok) {
      const jobsFetchedData = await jobsResponse.json()
      if (jobsFetchedData.jobs.length > 0) {
        const jobsUpdatedData = jobsFetchedData.jobs.map(each => ({
          companyLogoUrl: each.company_logo_url,
          employmentType: each.employment_type,
          id: each.id,
          jobDescription: each.job_description,
          location: each.location,
          packagePerAnnum: each.package_per_annum,
          rating: each.rating,
          title: each.title,
        }))
        this.setState({
          jobsDetails: jobsUpdatedData,
          jobsApiStatus: jobsApiStatusConstants.success,
        })
      } else {
        this.setState({jobsApiStatus: jobsApiStatusConstants.noJobs})
      }
    } else {
      this.setState({jobsApiStatus: jobsApiStatusConstants.failure})
    }
  }

  getProfileDetails = async () => {
    this.setState({profileApiStatus: profileApiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const profileApiUrl = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(profileApiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedProfileData = {
        name: data.profile_details.name,
        profileImageUrl: data.profile_details.profile_image_url,
        shortBio: data.profile_details.short_bio,
      }
      this.setState({
        profileDetails: updatedProfileData,
        profileApiStatus: profileApiStatusConstants.success,
      })
    } else {
      this.setState({profileApiStatus: profileApiStatusConstants.failure})
    }
  }

  onClickRetry = () => this.getProfileDetails()

  onClickJobsRetry = () => this.getJobs()

  renderProfile = () => {
    const {profileDetails} = this.state
    return (
      <div className="profile-details-container">
        <img
          src={profileDetails.profileImageUrl}
          className="profile-image"
          alt="profile"
        />
        <h1 className="profile-name">{profileDetails.name}</h1>
        <p className="profile-description">{profileDetails.shortBio}</p>
      </div>
    )
  }

  renderProfileLoading = () => (
    <div className="loader-container" testid="loader">
      <Loader type="ThreeDots" color="#6366f1" height="50" width="50" />
    </div>
  )

  renderProfileFailure = () => (
    <div className="retry-button-container">
      <button
        className="retry-button"
        type="button"
        onClick={this.onClickRetry}
      >
        Retry
      </button>
    </div>
  )

  renderSearchInput = () => {
    const {searchInput} = this.state
    return (
      <div className="search-input-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        />
        <button
          type="button"
          testid="searchButton"
          className="search-button"
          onClick={this.onClickSearch}
        >
          <BsSearch className="search-icon" />
        </button>
      </div>
    )
  }

  renderJobsListDetails = () => {
    const {jobsDetails} = this.state
    return (
      <ul className="jobs-list-container">
        {jobsDetails.map(eachJob => (
          <JobCard key={eachJob.id} jobData={eachJob} />
        ))}
      </ul>
    )
  }

  renderJobsListFailure = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="jobs-failure-image"
      />
      <div className="failure-content-container">
        <h1 className="failure-heading">Oops! Something Went Wrong</h1>
        <p className="failure-description">
          We cannot seem to find the page you are looking for.
        </p>
        <button
          className="retry-button"
          type="button"
          onClick={this.onClickJobsRetry}
        >
          Retry
        </button>
      </div>
    </>
  )

  renderNoJobsView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
        alt="no jobs"
        className="jobs-failure-image"
      />
      <div className="failure-content-container">
        <h1 className="no-job-heading">No Jobs Found</h1>
        <p className="no-jobs-para">
          We could not find any jobs. Try other filters.
        </p>
      </div>
    </>
  )

  renderProfileDetails = () => {
    const {profileApiStatus} = this.state
    switch (profileApiStatus) {
      case profileApiStatusConstants.success:
        return this.renderProfile()
      case profileApiStatusConstants.inProgress:
        return this.renderProfileLoading()
      case profileApiStatusConstants.failure:
        return this.renderProfileFailure()
      default:
        return null
    }
  }

  renderJobDetails = () => {
    const {jobsApiStatus} = this.state
    switch (jobsApiStatus) {
      case jobsApiStatusConstants.success:
        return this.renderJobsListDetails()
      case jobsApiStatusConstants.failure:
        return this.renderJobsListFailure()
      case jobsApiStatusConstants.inProgress:
        return this.renderProfileLoading()
      case jobsApiStatusConstants.noJobs:
        return this.renderNoJobsView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="jobs-page-container">
        <Header />
        <div className="jobs-page-content-container">
          <div className="left-container">
            {this.renderProfileDetails()}
            <hr className="break-line" />
            <div className="filters-container">
              <FiltersGroup
                employmentTypes={employmentTypesList}
                salaryRanges={salaryRangesList}
                salaryRangeChange={this.salaryRangeChange}
                employmentTypeChange={this.employmentTypeChange}
              />
            </div>
          </div>
          <div className="right-container">
            {this.renderSearchInput()}
            {this.renderJobDetails()}
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
