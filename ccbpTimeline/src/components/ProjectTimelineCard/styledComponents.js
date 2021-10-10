// Style your elements here
import styled from 'styled-components'

export const ProjectTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const ProjectTitleText = styled.h1`
  font-family: 'Roboto';
`

export const ProjectDurationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ProjectDurationText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin-left: 5px;
`
export const ProjectDescription = styled(ProjectDurationText)`
  font-size: 18px;
`
export const VisitLink = styled.a`
  text-decoration: none;
  color: #0967d2;
`
