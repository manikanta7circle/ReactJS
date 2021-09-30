import {Link} from 'react-router-dom'

import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BsFillBriefcaseFill} from 'react-icons/bs'

import './index.css'

const JobCard = props => {
  const {jobData} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobData
  return (
    <Link to={`/jobs/${id}`} className="jobs-card-details-link">
      <li className="job-list-item">
        <div className="job-details-container">
          <img
            src={companyLogoUrl}
            alt="company logo"
            className="company-logo"
          />
          <div className="job-title-rating-container">
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
          <h1 className="job-description-heading">Description</h1>
          <p className="job-description">{jobDescription}</p>
        </div>
      </li>
    </Link>
  )
}

export default JobCard
