// Style your elements here
import styled from 'styled-components'

export const CourseTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const CourseName = styled.h1`
  font-family: 'Roboto';
`
export const DurationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const DurationText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin-left: 5px;
`
export const DescriptionText = styled(DurationText)`
  font-size: 18px;
`

export const TagsContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const Tag = styled.p`
  background-color: #cbd5e1;
  border-radius: 8px;
  padding: 5px;
  margin: 5px;
`
