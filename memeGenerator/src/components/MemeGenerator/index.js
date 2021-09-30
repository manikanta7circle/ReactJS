import {Component} from 'react'

import {
  PageContainer,
  Heading,
  MainContainer,
  FormContainer,
  LabelText,
  UserInput,
  MemeContainer,
  SelectFont,
  Meme,
  MemeText,
  CustomButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    urlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeOption: fontSizesOptionsList[0].optionId,
    MemeUrl: '',
    MemeTopText: '',
    MemeBottomText: '',
    MemeFontSize: '',
  }

  onChangeUrlInput = event => {
    this.setState({urlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSizeOption: event.target.value})
  }

  onGenerate = event => {
    event.preventDefault()
    const {urlInput, topTextInput, bottomTextInput, fontSizeOption} = this.state
    this.setState({
      MemeUrl: urlInput,
      MemeTopText: topTextInput,
      MemeBottomText: bottomTextInput,
      MemeFontSize: fontSizeOption,
    })
  }

  renderMeme = () => {
    const {MemeUrl, MemeTopText, MemeBottomText, MemeFontSize} = this.state
    return (
      <Meme data-testid="meme" image={MemeUrl}>
        <MemeText textSize={MemeFontSize}> {MemeTopText}</MemeText>
        <MemeText textSize={MemeFontSize}> {MemeBottomText}</MemeText>
      </Meme>
    )
  }

  render() {
    const {urlInput, topTextInput, bottomTextInput, fontSizeOption} = this.state
    return (
      <PageContainer>
        <Heading>Meme Generator</Heading>
        <MainContainer>
          <FormContainer as="form" onSubmit={this.onGenerate}>
            <LabelText htmlFor="imageUrl">Image URL</LabelText>
            <UserInput
              type="text"
              id="imageUrl"
              placeholder="Enter the Image URL"
              value={urlInput}
              onChange={this.onChangeUrlInput}
            />
            <LabelText htmlFor="topText"> Top Text</LabelText>
            <UserInput
              type="text"
              id="topText"
              placeholder="Enter the Top Text"
              value={topTextInput}
              onChange={this.onChangeTopText}
            />
            <LabelText htmlFor="bottomText"> Bottom Text</LabelText>
            <UserInput
              type="text"
              id="bottomText"
              placeholder="Enter the Bottom Text"
              value={bottomTextInput}
              onChange={this.onChangeBottomText}
            />
            <LabelText htmlFor="selectFont"> Font Size</LabelText>
            <SelectFont
              id="selectFont"
              value={fontSizeOption}
              onChange={this.onChangeFontSize}
            >
              {fontSizesOptionsList.map(eachItem => (
                <option value={eachItem.optionId} key={eachItem.optionId}>
                  {eachItem.displayText}
                </option>
              ))}
            </SelectFont>
            <CustomButton type="submit">Generate</CustomButton>
          </FormContainer>
          {this.renderMeme()}
        </MainContainer>
      </PageContainer>
    )
  }
}

export default MemeGenerator
