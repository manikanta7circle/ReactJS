// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import {
  ProjectTitleContainer,
  ProjectTitleText,
  ProjectDurationContainer,
  ProjectDurationText,
  ProjectDescription,
  VisitLink,
} from './styledComponents'

const ProjectTimelineCard = props => {
  const {projectData} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectData
  return (
    <div>
      <img src={imageUrl} alt="project" width="100%" height="300px" />
      <ProjectTitleContainer>
        <ProjectTitleText>{projectTitle}</ProjectTitleText>
        <ProjectDurationContainer>
          <AiFillCalendar />
          <ProjectDurationText>{duration}</ProjectDurationText>
        </ProjectDurationContainer>
      </ProjectTitleContainer>
      <ProjectDescription>{description}</ProjectDescription>
      <VisitLink as="a" href={projectUrl}>
        Visit
      </VisitLink>
    </div>
  )
}
export default ProjectTimelineCard
