import './index.css'

const FiltersGroup = props => {
  const renderEmploymentOptions = () => {
    const {employmentTypes} = props
    return (
      <ul className="options-container">
        {employmentTypes.map(eachItem => {
          const {employmentTypeChange} = props
          const onChangeEmploymentType = event => {
            if (event.target.checked) {
              employmentTypeChange(event.target.value)
            }
          }
          return (
            <li className="filter-option" key={eachItem.employmentTypeId}>
              <input
                type="checkbox"
                id={eachItem.employmentTypeId}
                value={eachItem.employmentTypeId}
                onChange={onChangeEmploymentType}
              />
              <label className="label-text" htmlFor={eachItem.employmentTypeId}>
                {eachItem.label}
              </label>
            </li>
          )
        })}
      </ul>
    )
  }

  const renderSalaryRangeOptions = () => {
    const {salaryRanges} = props
    return (
      <ul className="options-container">
        {salaryRanges.map(eachItem => {
          const {salaryRangeChange} = props
          const onChangeSalaryRange = event =>
            salaryRangeChange(event.target.value)

          return (
            <li className="filter-option" key={eachItem.salaryRangeId}>
              <input
                type="radio"
                id={eachItem.salaryRangeId}
                value={eachItem.salaryRangeId}
                name="salary"
                onChange={onChangeSalaryRange}
              />
              <label className="label-text" htmlFor={eachItem.salaryRangeId}>
                {eachItem.label}
              </label>
            </li>
          )
        })}
      </ul>
    )
  }
  return (
    <div className="filters-container">
      <h1 className="filter-heading">Type of Employment</h1>
      {renderEmploymentOptions()}
      <hr className="break-line" />
      <h1 className="filter-heading">Salary Range</h1>
      {renderSalaryRangeOptions()}
    </div>
  )
}
export default FiltersGroup
