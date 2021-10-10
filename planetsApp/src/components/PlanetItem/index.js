// Write your code here
import {
  SlideContainer,
  PlanetImage,
  PlanetName,
  AboutPlanet,
} from './styledComponents'

const PlanetItem = props => {
  const {planetItemData} = props
  const {name, imageUrl, description} = planetItemData

  return (
    <SlideContainer>
      <PlanetImage src={imageUrl} alt={`planet ${name}`} />
      <PlanetName>{name}</PlanetName>
      <AboutPlanet>{description}</AboutPlanet>
    </SlideContainer>
  )
}

export default PlanetItem
