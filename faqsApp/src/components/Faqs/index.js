// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="faqs-container">
          <h1 className="heading">FAQs</h1>
          {faqsList.map(eachItem => (
            <FaqItem data={eachItem} key={eachItem.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default Faqs
