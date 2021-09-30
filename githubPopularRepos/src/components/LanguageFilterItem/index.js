// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {filterData, activeFilter, isActive} = props
  const {id, language} = filterData
  const buttonClass = isActive ? 'active' : 'filter-button'
  const onFilterItem = () => {
    activeFilter(id)
  }

  return (
    <li className="filter-item">
      <button type="button" className={buttonClass} onClick={onFilterItem}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
