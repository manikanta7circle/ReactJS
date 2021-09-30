// Style your elements here
import styled from 'styled-components'

export const CustomListItem = styled.li`
  margin: 10px;
`
export const CustomButton = styled.button`
  padding: 10px;
  color: #000000;
  background-color: #ffffff;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  border: 0px;
  border-radius: 8px;
  width: 100px;
  cursor: pointer;
`
