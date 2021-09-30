import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BsFillBriefcaseFill} from 'react-icons/bs'

import './index.css'

const SimilarJobItem = props => {
  const {similarJobItemData} = props
  return (
    <li className="similar-job-item">
      <div className="job-details-container">
        <img
          src={similarJobItemData.company_logo_url}
          alt="similar job company logo"
          className="company-logo"
        />
        <div className="job-title-rating-container">
          <h1 className="job-title">{similarJobItemData.title}</h1>
          <div className="ratings-container">
            <AiFillStar className="job-details-icon" />
            <p className="rating-para">{similarJobItemData.rating}</p>
          </div>
        </div>
      </div>
      <div className="job-description-container">
        <h1 className="job-description-heading">Description</h1>
        <p className="job-description">{similarJobItemData.job_description}</p>
      </div>
      <div className="location-role-container">
        <div className="location-container">
          <MdLocationOn className="job-lr-icon" />
          <p className="lr-para">{similarJobItemData.location}</p>
        </div>
        <div className="location-container">
          <BsFillBriefcaseFill className="job-lr-icon" />
          <p className="lr-para">{similarJobItemData.employment_type}</p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobItem
