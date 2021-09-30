// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const HomeDarkImage =
  'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
const HomeLightImage =
  'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          <div className={isDarkTheme ? 'dark-home' : 'light-home'}>
            <img
              src={isDarkTheme ? HomeDarkImage : HomeLightImage}
              alt="home"
              className="home-image"
            />
            <h1> Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
