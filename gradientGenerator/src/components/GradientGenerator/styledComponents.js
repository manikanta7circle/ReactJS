// Style your elements here
import styled from 'styled-components'

export const GradientContainer = styled.div`
  min-height: 100vh;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to ${props => props.Gdirection},
    ${props => props.colorOne},
    ${props => props.colorTwo}
  );
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`

export const CustomPara = styled.p`
  color: #ffffff;
  font-size: 15px;
`

export const DirectionControlsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  list-style-type: none;
  padding: 0px;
`
export const FormContainer = styled.form`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Controls = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`

export const ColorPickerContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 20px;
`
export const ColorLabel = styled.p`
  margin-bottom: 10px;
  color: #ffffff;
`
export const CustomColorPicker = styled.input`
  padding: 10px;
  background-color: ${props => props.bgColor};
  border: 0px;
  width: 60px;
`
export const GenerateButton = styled.button`
  padding: 10px;
  color: #000000;
  background-color: #00c9b7;
  border-radius: 8px;
  border: 0px;
`
