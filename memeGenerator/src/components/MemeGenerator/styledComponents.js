// Style your components here
// Style your components here
import styled from 'styled-components'

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px;
`
export const Heading = styled.h1`
  color: #35469c;
  font-size: 20px;
  font-family: 'Roboto';
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const FormContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 30%;
`
export const LabelText = styled.label`
  font-size: 15px;
  color: #5a7184;
  margin-bottom: 10px;
`

export const UserInput = styled.input`
  padding: 15px;
  border: solid 1px #5a7184;
  color: #5a7184;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 10px;
`
export const MemeContainer = styled.div`
  margin: 10px;
  width: 40%;
  height: 50vh;
`
export const SelectFont = styled.select`
  background-color: transparent;
`
export const Meme = styled.div`
  background-image: url(${props => props.image});
  height: 100%;
  width: 100%;
  background-size: cover;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const MemeText = styled.p`
  color: #ffffff;
  font-size: ${props => props.textSize}px;
`
export const CustomButton = styled.button`
  padding: 15px;
  color: #ffffff;
  font-size: 15px;
  background-color: #0b69ff;
  border-radius: 10px;
`
