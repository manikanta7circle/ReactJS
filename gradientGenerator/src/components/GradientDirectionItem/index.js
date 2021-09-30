// Write your code here
import {CustomListItem, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionItemData, directionChange, isActive} = props
  const {value, displayText} = directionItemData

  const onClickDirection = () => {
    directionChange(value)
  }

  return (
    <CustomListItem>
      <CustomButton onClick={onClickDirection} isActive={isActive}>
        {displayText}
      </CustomButton>
    </CustomListItem>
  )
}

export default GradientDirectionItem
