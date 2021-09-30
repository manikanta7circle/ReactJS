// Write your code here
// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const renderContent = () => (
        <div className="content-container">
          <h1 className="content-heading">Content</h1>
          <p className="content-para">Lorem Ipsum</p>
        </div>
      )

      const renderLeftNavbar = () => (
        <div className="left-container">
          <h1 className="content-heading">Left Navbar Menu</h1>
          <ul className="menu-container">
            <li className="menu-item">Item 1</li>
            <li className="menu-item">Item 2</li>
            <li className="menu-item">Item 3</li>
            <li className="menu-item">Item 4</li>
          </ul>
        </div>
      )

      const renderRightNavbar = () => (
        <div className="right-navbar-container">
          <h1 className="content-heading">Right Navbar</h1>
          <div>
            <p>Ad 1</p>
          </div>
          <div>
            <p>Ad 2</p>
          </div>
        </div>
      )

      return (
        <div className="body-container">
          {showContent ? renderContent() : null}
          {showLeftNavbar ? renderLeftNavbar() : null}
          {showRightNavbar ? renderRightNavbar() : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
