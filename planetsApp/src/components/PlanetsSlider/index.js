// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import {SliderContainer, Heading} from './styledComponents'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <SliderContainer data-testid="planets">
      <Heading>PLANETS</Heading>
      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} planetItemData={eachItem} />
        ))}
      </Slider>
    </SliderContainer>
  )
}

export default PlanetsSlider
