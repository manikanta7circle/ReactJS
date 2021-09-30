import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {IoMdOpen} from 'react-icons/io'

import Header from '../Header'
import SimilarJobItem from '../SimilarJobItem'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const JobItemApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class JobItemDetails extends Component {
  state = {
    jobItemDetailsData: {},
    jobItemApiStatus: JobItemApiStatusConstants.initial,
    similarJobs: [],
    skills: [],
    lifeAtCompany: {},
  }

  componentDidMount() {
    this.getJobItemDetails()
  }

  getJobItemDetails = async () => {
    this.setState({jobItemApiStatus: JobItemApiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const JobItemApiUrl = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const jobItemResponse = await fetch(JobItemApiUrl, options)
    if (jobItemResponse.ok) {
      const jobItemData = await jobItemResponse.json()
      const updatedJobItemData = {
        companyLogoUrl: jobItemData.job_details.company_logo_url,
        employmentType: jobItemData.job_details.employment_type,
        id: jobItemData.job_details.id,
        jobDescription: jobItemData.job_details.job_description,
        location: jobItemData.job_details.location,
        packagePerAnnum: jobItemData.job_details.package_per_annum,
        rating: jobItemData.job_details.rating,
        title: jobItemData.job_details.title,
        companyWebsiteUrl: jobItemData.job_details.company_website_url,
      }

      this.setState({
        similarJobs: jobItemData.similar_jobs,
        jobItemApiStatus: JobItemApiStatusConstants.success,
        skills: jobItemData.job_details.skills,
        lifeAtCompany: jobItemData.job_details.life_at_company,
        jobItemDetailsData: updatedJobItemData,
      })
    } else {
      this.setState({jobItemApiStatus: JobItemApiStatusConstants.failure})
    }
  }

  onClickJobItemRetry = () => this.getJobItemDetails()

  renderJobItemSuccess = () => {
    const {jobItemDetailsData, skills, lifeAtCompany} = this.state
    const {
      companyLogoUrl,
      title,
      rating,
      location,
      employmentType,
      packagePerAnnum,
      companyWebsiteUrl,
      jobDescription,
    } = jobItemDetailsData
    return (
      <>
        <div className="job-item-details-container">
          <img
            src={companyLogoUrl}
            alt="job details company logo"
            className="company-item-logo"
          />
          <div className="job-item-title-rating-container">
            <h1 className="job-title">{title}</h1>
            <div className="ratings-container">
              <AiFillStar className="job-details-icon" />
              <p className="rating-para">{rating}</p>
            </div>
          </div>
        </div>
        <div className="lrs-container">
          <div className="location-role-container">
            <div className="location-container">
              <MdLocationOn className="job-lr-icon" />
              <p className="lr-para">{location}</p>
            </div>
            <div className="location-container">
              <BsFillBriefcaseFill className="job-lr-icon" />
              <p className="lr-para">{employmentType}</p>
            </div>
          </div>
          <p className="salary">{packagePerAnnum}</p>
        </div>
        <hr />
        <div className="job-description-container">
          <div className="visit-container">
            <h1 className="job-description-heading">Description</h1>
            <a href={companyWebsiteUrl} className="visit-link">
              Visit <IoMdOpen />
            </a>
          </div>
          <p className="job-description">{jobDescription}</p>
          <h1 className="job-description-heading">Skills</h1>
          <ul className="job-item-skills-container">
            {skills.map(eachSkill => (
              <li className="skills-item" key={eachSkill.name}>
                <img
                  src={eachSkill.image_url}
                  alt={eachSkill.name}
                  className="skill-image"
                />
                <p className="skill-name">{eachSkill.name}</p>
              </li>
            ))}
          </ul>
          <h1 className="job-description-heading">Life at Company</h1>
          <div className="life-at-company-container">
            <p className="life-at-company-description">
              {lifeAtCompany.description}
            </p>
            <img
              src={lifeAtCompany.image_url}
              alt="life at company"
              className="life-at-company-image"
            />
          </div>
        </div>
      </>
    )
  }

  renderJobItemFailure = () => (
    <div className="job-item-failure-container">
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
          onClick={this.onClickJobItemRetry}
        >
          Retry
        </button>
      </div>
    </div>
  )

  renderJobItemInProgress = () => (
    <div className="loader-container" testid="loader">
      <Loader type="ThreeDots" color="#6366f1" height="50" width="50" />
    </div>
  )

  renderJobItemDetails = () => {
    const {jobItemApiStatus} = this.state
    switch (jobItemApiStatus) {
      case JobItemApiStatusConstants.success:
        return this.renderJobItemSuccess()
      case JobItemApiStatusConstants.failure:
        return this.renderJobItemFailure()
      case JobItemApiStatusConstants.inProgress:
        return this.renderJobItemInProgress()
      default:
        return null
    }
  }

  render() {
    const {similarJobs} = this.state
    return (
      <div className="job-item-details-top-container">
        <Header />
        <div className="job-item-details-main-container">
          <div className="job-item-content-container">
            {this.renderJobItemDetails()}
          </div>
          <h1 className="similar-jobs-heading">Similar Jobs</h1>
          <ul className="similar-jobs-list-container">
            {similarJobs.map(eachJob => (
              <SimilarJobItem key={eachJob.id} similarJobItemData={eachJob} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default JobItemDetails
