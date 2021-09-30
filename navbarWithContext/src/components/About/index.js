// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const AboutLightImage =
  'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
const AboutDarkImage =
  'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          <div className={isDarkTheme ? 'dark-home' : 'light-home'}>
            <img
              src={isDarkTheme ? AboutDarkImage : AboutLightImage}
              alt="about"
              className="home-image"
            />
            <h1> About </h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
