// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeShowContent = event => {
        onToggleShowContent(event.target.checked)
      }
      const onChangeShowLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }
      const onChangeShowRightNavbar = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <div className="controller-bg-container">
          <h1 className="layout-heading">Layout</h1>
          <ul className="controllers-container">
            <li className="controller-item">
              <input
                type="checkbox"
                className="input-box"
                id="inputContent"
                onChange={onChangeShowContent}
                defaultChecked={showContent}
              />
              <label htmlFor="inputContent" className="label-text">
                Content
              </label>
            </li>
            <li className="controller-item">
              <input
                type="checkbox"
                className="input-box"
                id="inputLeftNavbar"
                defaultChecked={showLeftNavbar}
                onChange={onChangeShowLeftNavbar}
              />
              <label htmlFor="inputLeftNavbar" className="label-text">
                Left Navbar
              </label>
            </li>
            <li className="controller-item">
              <input
                type="checkbox"
                className="input-box"
                id="inputRightNavbar"
                defaultChecked={showRightNavbar}
                onChange={onChangeShowRightNavbar}
              />
              <label htmlFor="inputRightNavbar" className="label-text">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
