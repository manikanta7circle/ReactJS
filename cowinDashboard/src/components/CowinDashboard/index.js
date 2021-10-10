// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import {
  PageContainer,
  LogoContainer,
  LogoText,
  CustomHeading,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class CowinDashboard extends Component {
  state = {
    coverageData: [],
    genderData: [],
    ageData: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getCowinData()
  }

  getCowinData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(apiUrl)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.last_7_days_vaccination.map(eachItem => ({
        vaccineDate: eachItem.vaccine_date,
        dose1: eachItem.dose_1,
        dose2: eachItem.dose_2,
      }))
      this.setState({
        coverageData: updatedData,
        genderData: data.vaccination_by_gender,
        ageData: data.vaccination_by_age,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {coverageData, genderData, ageData} = this.state
    return (
      <>
        <VaccinationCoverage coverageData={coverageData} />
        <VaccinationByGender genderData={genderData} />
        <VaccinationByAge ageData={ageData} />
      </>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Something went wrong</h1>
    </>
  )

  renderCowinDashboard = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <PageContainer>
        <LogoContainer>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <LogoText> Co-Win </LogoText>
        </LogoContainer>
        <CustomHeading>CoWin Vaccination in India</CustomHeading>
        {this.renderCowinDashboard()}
      </PageContainer>
    )
  }
}

export default CowinDashboard
