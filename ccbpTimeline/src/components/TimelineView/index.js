// Write your code here
import {Chrono} from 'react-chrono'

import {ChronoContainer, MainHeading} from './styledComponents'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  const items = timelineItemsList.map(eachItem => ({
    title: eachItem.title,
  }))
  return (
    <ChronoContainer>
      <MainHeading>
        MY JOURNEY OF <br />
        CCBP 4.0
      </MainHeading>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={items}
        theme={{secondary: 'white', cardForeColor: 'yellow'}}
      >
        {timelineItemsList.map(eachItem => {
          if (eachItem.categoryId === 'COURSE') {
            return (
              <CourseTimelineCard courseData={eachItem} key={eachItem.id} />
            )
          }
          return (
            <ProjectTimelineCard projectData={eachItem} key={eachItem.id} />
          )
        })}
      </Chrono>
    </ChronoContainer>
  )
}

export default TimelineView
