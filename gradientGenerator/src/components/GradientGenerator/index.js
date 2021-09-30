import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientContainer,
  Heading,
  CustomPara,
  DirectionControlsContainer,
  FormContainer,
  ColorPickerContainer,
  ColorLabel,
  CustomColorPicker,
  GenerateButton,
  Controls,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    colorOne: '#8ae323',
    colorTwo: '#014f7b',
    direction: gradientDirectionsList[0].value,
    gradientOne: '#8ae323',
    gradientTwo: '#014f7b',
    gradientDirection: gradientDirectionsList[0].value,
  }

  directionChange = value => {
    this.setState({direction: value})
  }

  onChangeColorOne = event => {
    this.setState({colorOne: event.target.value})
  }

  onChangeColorTwo = event => {
    this.setState({colorTwo: event.target.value})
  }

  onGenerate = event => {
    event.preventDefault()
    const {colorOne, colorTwo, direction} = this.state
    this.setState({
      gradientOne: colorOne,
      gradientTwo: colorTwo,
      gradientDirection: direction,
    })
  }

  render() {
    const {
      colorOne,
      colorTwo,
      direction,
      gradientOne,
      gradientTwo,
      gradientDirection,
    } = this.state
    return (
      <GradientContainer
        colorOne={gradientOne}
        colorTwo={gradientTwo}
        Gdirection={gradientDirection}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <CustomPara> Choose Direction </CustomPara>
        <DirectionControlsContainer>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              directionItemData={eachItem}
              directionChange={this.directionChange}
              isActive={direction === eachItem.value}
            />
          ))}
        </DirectionControlsContainer>
        <CustomPara> Pick the Colors</CustomPara>
        <FormContainer onSubmit={this.onGenerate}>
          <Controls>
            <ColorPickerContainer>
              <ColorLabel htmlFor="gradientColorOne">{colorOne}</ColorLabel>
              <CustomColorPicker
                type="color"
                id="gradientColorOne"
                value={colorOne}
                bgColor={colorOne}
                onChange={this.onChangeColorOne}
              />
            </ColorPickerContainer>
            <ColorPickerContainer>
              <ColorLabel htmlFor="gradientColorTwo">{colorTwo}</ColorLabel>
              <CustomColorPicker
                type="color"
                id="gradientColorTwo"
                value={colorTwo}
                bgColor={colorTwo}
                onChange={this.onChangeColorTwo}
              />
            </ColorPickerContainer>
          </Controls>
          <GenerateButton type="submit">Generate</GenerateButton>
        </FormContainer>
      </GradientContainer>
    )
  }
}
export default GradientGenerator
