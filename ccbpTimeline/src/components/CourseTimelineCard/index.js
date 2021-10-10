// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import {
  CourseTitleContainer,
  CourseName,
  DurationContainer,
  DurationText,
  DescriptionText,
  TagsContainer,
  Tag,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {courseData} = props
  const {courseTitle, description, duration, tagsList} = courseData
  return (
    <div>
      <CourseTitleContainer>
        <CourseName>{courseTitle}</CourseName>
        <DurationContainer>
          <AiFillClockCircle />
          <DurationText>{duration}</DurationText>
        </DurationContainer>
      </CourseTitleContainer>
      <DescriptionText>{description}</DescriptionText>
      <TagsContainer>
        {tagsList.map(eachItem => (
          <Tag key={eachItem.id}>{eachItem.name}</Tag>
        ))}
      </TagsContainer>
    </div>
  )
}

export default CourseTimelineCard
